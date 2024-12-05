from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import firebase_admin
from firebase_admin import credentials, db, firestore

app = Flask(__name__)
CORS(app, resources={r"/": {"origins": ""}})

# Initialize Firebase app if it hasn't been initialized
try:
    firebase_admin.get_app()
except ValueError:
    cred = credentials.Certificate('/home/MY5TICR4V3N/mysite/famcart-be20c-firebase-adminsdk-6uzq8-91a2c74aec.json')
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://famcart-be20c-default-rtdb.asia-southeast1.firebasedatabase.app'
    })

# Reference to your database
ref = db.reference('/users')
firestore_db = firestore.client()

# Initialize expenses globally
exp = [0, 0, 0, 0]

def get_document_fields(collection_name, user_email):
    # Get reference to the document
    doc_ref = firestore_db.collection(collection_name).document(user_email)

    # Get the document snapshot
    doc = doc_ref.get()

    # Check if the document exists
    if doc.exists:
        # Get all fields of the document
        return doc.to_dict()
    else:
        print(f"Document '{user_email}' does not exist in collection '{collection_name}'")
        return None

def update_document_fields(collection_name, user_email, new_values):
    # Get reference to the document
    doc_ref = firestore_db.collection(collection_name).document(user_email)

    # Update each field with the incremented value
    for field, value in new_values.items():
        doc_ref.update({field: firestore.Increment(value)})

    print("Document fields updated successfully")

# Function for text extraction from images
def extract_text_from_image(image):
    cPAI_URL = "https://api-inference.huggingface.co/models/AdamCodd/donut-receipts-extract"
    headers = {"Authorization": "Bearer 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"}

    def query():
        response = requests.post(cPAI_URL, headers=headers, data=image)
        return response.json()

    output = query()

    outputs = output

    # List to hold item names and prices
    items_list = []

    # Variable to store total amount
    total_amount = None

    # Iterate through each output
    for output in outputs:
        # Extract store name
        store_name = output['generated_text'].split('<s_store_name>')[1].split('</s_store_name>')[0].strip()

        # Extract total amount
        total_amount = output['generated_text'].split('<s_total>')[1].split('</s_total>')[0].strip()

        # Extract line items
        line_items = output['generated_text'].split('<s_line_items>')[1].split('</s_line_items>')[0]

        # Split line items by <sep/> to get individual items
        items = line_items.split('<sep/>')

        # Iterate through each item
        for item in items:
            # Extract item name and price
            item_name = item.split('<s_item_name>')[1].split('</s_item_name>')[0].strip()
            item_price = item.split('<s_item_value>')[1].split('</s_item_value>')[0].strip()

            # Append item name and price as a list to the main list
            items_list.append([item_name, item_price])

    return items_list

# Function to remove item from the database and update expenses
def remove_item(user_id, item_id, category, price):
    global exp  
    ref.child(user_id).child("items").child(item_id).delete()
    print(f"Item with ID '{item_id}' removed for user '{user_id}'")
    # Add the price to the corresponding category variable
    if category == "food":
        exp[0] += price
    elif category == "medicine":
        exp[1] += price
    elif category == "entertainments":
        exp[2] += price
    else:
        exp[3] += price

# Function to compare and delete items for a specific user
def compare_and_delete_items(user_email, items_list):
    global exp 
    # Retrieve values from the database for the specified user
    user_data = ref.child(user_email).get()
    if not user_data:
        print(f"No user found with email address '{user_email}'")
        return

    items = user_data.get("items", {})
    # Iterate through the items in the database
    for item_id, item_data in items.items():
        item_name = item_data.get("name", "").lower()
        category = item_data.get("category", "").lower()
        # Check if the item exists in the items_list
        for item in items_list:
            list_name, price = item
            if list_name.lower() == item_name:
                remove_item(user_email, item_id, category, float(price[1:]))  # Remove the dollar sign and convert price to float
                break
        else:
            print(f"No match found for item '{item_name}' for user '{user_email}'.")

@app.route('/extract-text', methods=['POST'])
def extract_text():
    global exp  
    if 'image' not in request.files:
        return 'No file part'
    file = request.files['image']
    if file.filename == '':
        return 'No selected file'
    if file:
        # Extract text from the image
        extracted_text = extract_text_from_image(file)
        # Assuming user_email is received from frontend
        user_email = request.form['user_email']
        # Compare and delete items for the specified user
        compare_and_delete_items(user_email, extracted_text)
        # Return expenses to the frontend and reset exp to zero

        existing_fields = get_document_fields("users", user_email)
        if existing_fields:
            new_values = {}
            for field in existing_fields.keys():
                if field == 'food':
                    new_values[field] = exp[0]
                elif field == 'medicine':
                    new_values[field] = exp[1]
                elif field == 'entertainments':
                    new_values[field] = exp[2]
                else:
                    new_values[field] = exp[3]
            # Update document fields with incremented values
            update_document_fields("users", user_email, new_values)

        response = jsonify({'expenses': exp})
        # Reset exp to zero
        exp = [0, 0, 0, 0]
        return response

if __name__ == '__main__':
    app.run(debug=True)