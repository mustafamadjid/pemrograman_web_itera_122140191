from ItemClass.LibraryItemClass import LibraryItem

# Class for book
class Book (LibraryItem):
    # Total object instance
    total_item = 0
    
    def __init__(self,title,author,publisher,year,pages):
        self.title = title
        self.author = author
        self.publisher = publisher
        self.year = year
        self.pages = pages
        self.status = "Available"
        
        # private attribute
        self.__book_code = None
        
        # Count object instance
        self.total_item += 1
        

    # Getter for book code
    @property
    def book_code(self):
        return self.__book_code
    
    @book_code.setter
    def book_code(self,value):
        self.__book_code = value
    
    def show_info(self):
        return f"Title: {self.title}, Author: {self.author}, Publisher: {self.publisher}, Year: {self.year}, Pages: {self.pages}, Status: {self.status}"
    
    def total_item(self):
        return self.total_item


# Class for magazine
class Magazine (LibraryItem):
    # Total object instance
    total_item = 0
    
    def __init__(self,title,editor,publisher,year,issue):
        self.title = title
        self.editor = editor
        self.publisher = publisher
        self.year = year
        self.issue = issue
        self.status = "Available"
        
        # private attribute
        self.__magazine_code = None
        
        # Count object instance
        self.total_item += 1
        
    # Getter for magazine code
    @property
    def magazine_code (self):
        return self.__magazine_code
    

    @magazine_code.setter
    def magazine_code (self,value):
        self.__magazine_code = value
    
    def show_info(self):
        return f"Title: {self.title}, Editor: {self.editor}, Publisher: {self.publisher}, Year: {self.year}, Issue: {self.issue}, Status: {self.status}"
    
    def total_item(self):
        return self.total_item


        
      