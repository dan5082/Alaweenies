# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Coffees(models.Model):
    coffeeid = models.IntegerField(db_column='CoffeeID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.
    preparationtime = models.IntegerField(db_column='PreparationTime')  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=256)  # Field name made lowercase.
    price = models.IntegerField(db_column='Price')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Coffees'


class Customers(models.Model):
    customerid = models.IntegerField(db_column='CustomerID', primary_key=True)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', max_length=256)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=256)  # Field name made lowercase.
    passwordhash = models.CharField(db_column='PasswordHash', max_length=256)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=256)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=256)  # Field name made lowercase.
    dob = models.CharField(db_column='DOB', max_length=256)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=256)  # Field name made lowercase.
    favoriteorder = models.ForeignKey('Orders', models.DO_NOTHING, db_column='FavoriteOrder')  # Field name made lowercase.
    preferredlocation = models.IntegerField(db_column='PreferredLocation')  # Field name made lowercase.
    preferreddriver = models.IntegerField(db_column='PreferredDriver')  # Field name made lowercase.
    rewardpoints = models.IntegerField(db_column='RewardPoints')  # Field name made lowercase.
    creditcardnum = models.CharField(db_column='CreditCardNum', max_length=256)  # Field name made lowercase.
    creditcardname = models.CharField(db_column='CreditCardName', max_length=256)  # Field name made lowercase.
    creditcardexpdate = models.CharField(db_column='CreditCardExpDate', max_length=256)  # Field name made lowercase.
    ccv = models.IntegerField(db_column='CCV')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Customers'


class Drivers(models.Model):
    driverid = models.IntegerField(db_column='DriverID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.
    phonenumber = models.CharField(db_column='PhoneNumber', max_length=256)  # Field name made lowercase.
    carmake = models.CharField(db_column='CarMake', max_length=256)  # Field name made lowercase.
    carmodel = models.CharField(db_column='CarModel', max_length=256)  # Field name made lowercase.
    caryear = models.IntegerField(db_column='CarYear')  # Field name made lowercase.
    restaurant = models.IntegerField(db_column='Restaurant')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Drivers'


class Hotdogs(models.Model):
    hotdogid = models.IntegerField(db_column='HotDogID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.
    preparationtime = models.IntegerField(db_column='PreparationTime')  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=256)  # Field name made lowercase.
    price = models.IntegerField(db_column='Price')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'HotDogs'


class Locations(models.Model):
    locationid = models.IntegerField(db_column='LocationID', primary_key=True)  # Field name made lowercase.
    streetnumber = models.IntegerField(db_column='StreetNumber')  # Field name made lowercase.
    streetname = models.CharField(db_column='StreetName', max_length=256)  # Field name made lowercase.
    city = models.CharField(db_column='City', max_length=256)  # Field name made lowercase.
    state = models.CharField(db_column='State', max_length=256)  # Field name made lowercase.
    zipcode = models.IntegerField(db_column='Zipcode')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Locations'


class Orders(models.Model):
    orderid = models.IntegerField(db_column='OrderID', primary_key=True)  # Field name made lowercase.
    orderprice = models.IntegerField(db_column='OrderPrice')  # Field name made lowercase.
    customerid = models.IntegerField(db_column='CustomerID')  # Field name made lowercase.
    driverid = models.IntegerField(db_column='DriverID')  # Field name made lowercase.
    restaurantid = models.IntegerField(db_column='RestaurantID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Orders'


class OrdersItems(models.Model):
    customerid = models.IntegerField(db_column='CustomerID')  # Field name made lowercase.
    hotdogid = models.IntegerField(db_column='HotDogID', primary_key=True)  # Field name made lowercase.
    sideid = models.IntegerField(db_column='SideID')  # Field name made lowercase.
    coffeeid = models.IntegerField(db_column='CoffeeID')  # Field name made lowercase.
    orderid = models.IntegerField(db_column='OrderID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Orders_Items'
        unique_together = (('hotdogid', 'sideid', 'coffeeid', 'orderid'),)


class Restaurants(models.Model):
    restaurantid = models.IntegerField(db_column='RestaurantID', primary_key=True)  # Field name made lowercase.
    locationid = models.IntegerField(db_column='LocationID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Restaurants'
        unique_together = (('restaurantid', 'locationid'),)


class Sides(models.Model):
    sideid = models.IntegerField(db_column='SideID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=256)  # Field name made lowercase.
    preparationtime = models.IntegerField(db_column='PreparationTime')  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=256)  # Field name made lowercase.
    price = models.IntegerField(db_column='Price')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Sides'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
