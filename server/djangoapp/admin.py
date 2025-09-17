from django.contrib import admin
from .models import CarMake, CarModel

# Registering models with their respective admins
admin.site.register(CarMake)
admin.site.register(CarModel)

# CarModelInline class: lets you edit CarModel objects directly on the CarMake admin page, instead of going to a separate screen.

# CarModelAdmin class: lets you customize how CarModel entries are displayed when you visit the CarModel section of the admin.

# CarMakeAdmin class with CarModelInline

# Register models here
