from ItemClass.LibraryItemClass import LibraryItem

# Class for book
class Book (LibraryItem):
    
    
    def __init__(self,title,author,publisher,year,pages):
        self.title = title
        self.author = author
        self.publisher = publisher
        self.year = year
        self.pages = pages
        self.status = "Available"
        
        # private attribute
        self.__book_code = None
        
       
        

    # Getter for book code
    @property
    def item_code(self):
        return self.__book_code
    
    # Setter for book code
    @item_code.setter
    def item_code(self,value):
        self.__book_code = value
    
     # showing item info 
    def show_info(self):
        return f"Title: {self.title}, Author: {self.author}, Publisher: {self.publisher}, Year: {self.year}, Pages: {self.pages}, Status: {self.status}, Code: {self.__book_code}"
    
    


# Class for magazine
class Magazine (LibraryItem):
 
    
    def __init__(self,title,editor,publisher,year,issue):
        self.title = title
        self.editor = editor
        self.publisher = publisher
        self.year = year
        self.issue = issue
        self.status = "Available"
        
        # private attribute
        self.__magazine_code = None
        
        
        
    # Getter for magazine code
    @property
    def item_code (self):
        return self.__magazine_code
    
    # Setter for magazine code
    @item_code.setter
    def item_code (self,value):
        self.__magazine_code = value
    
    # showing item info 
    def show_info(self):
        return f"Title: {self.title}, Editor: {self.editor}, Publisher: {self.publisher}, Year: {self.year}, Pages: {self.issue}, Status: {self.status}, Code: {self.__magazine_code}"
    
    # Total item 
    def total_item(self):
        return self.total_item


        
      