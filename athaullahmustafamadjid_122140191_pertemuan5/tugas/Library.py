from item import Book,Magazine

class Library:
    # List to store library items
    def __init__(self):
        self.items = []  

    # Add item to library
    def add_item(self, title,author,publisher,year,pages,item_category,item_code):
        if item_category == "Book":
            new_item = Book(title,author,publisher,year,pages)
            new_item.item_code = item_code
            self.items.append(new_item)
            print(f"\n--- Book added to library successfully: {title} ---")
        elif item_category == "Magazine":
            new_item = Magazine(title,author,publisher,year,pages)
            new_item.item_code = item_code
            self.items.append(new_item)
            print(f"\n --- Magazine added to library successfully: {title} ---")
         

    # Show total category
    def show_total_category(self):
        total_book =0
        total_magazine =0
        
        if self.items:
            for item in self.items:
                if isinstance(item,Book):
                    total_book +=1
                elif isinstance(item,Magazine):
                    total_magazine +=1
        return total_book,total_magazine 
    
    # Remove item by title
    def remove_item_by_title(self, item_title):
        for item in self.items:
            if item.title.lower() == item_title.lower():
                self.items.remove(item)
                print(f"Item removed successfully: {item_title} ")
                break
        else:
            print(f"Item not found: {item_title}")
            
    
    # Search item by title
    def search_item_by_title(self, item_title):
        for item in self.items:
            if item.title.lower() == item_title.lower():
                print(f"--- Item found: {item_title} ---\n")
                print(item.show_info())
                break
        else:
            print(f"--- Item not found: {item_title} ---")
            
                

    # Show all items 
    def show_all_items(self):
        book,magazine = self.show_total_category()
        for item in self.items:
            print(item.show_info())
            print("\n")
        
        print (f"\n--- Total items in the library: {self.total_items()} ---")
        print(f"--- Total Book Stored: {book} ---")
        print(f"--- Total Magazine Stored: {magazine} ---")
        
        
    # Show total items    
    def total_items(self):
        return len(self.items)
    
    

