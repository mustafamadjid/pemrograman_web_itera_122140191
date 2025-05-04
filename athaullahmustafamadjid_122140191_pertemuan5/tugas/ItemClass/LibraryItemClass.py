from abc import ABC, abstractmethod

# Abstract class untuk item di perpustakaan
class LibraryItem (ABC):
     # Geter for book code
     @property
     @abstractmethod
     def item_code(self):
          pass
     
     # Setter for book code
     @item_code.setter
     @abstractmethod
     def item_code(self, value):
          pass
     

     @abstractmethod
     def show_info(self):
          pass
     
   