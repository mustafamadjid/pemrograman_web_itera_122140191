from abc import ABC, abstractmethod

# Abstract class untuk item di perpustakaan
class LibraryItem (ABC):
     # Geter for book code
     @property
     @abstractmethod
     def book_code(self):
          pass
     
     # Setter for book code
     @book_code.setter
     @abstractmethod
     def book_code(self, value):
          pass
     

     @abstractmethod
     def show_info(self):
          pass
     
     @abstractmethod
     def total_item(self):
          pass
     