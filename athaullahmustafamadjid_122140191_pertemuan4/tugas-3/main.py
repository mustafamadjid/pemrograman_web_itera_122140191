from math_module import math_operations as mathops

print ("========= Penghitung Geometri dan Konversi Suhu =========\n")
print ("Opsi 1 : Geometri")
print ("Opsi 2 : Konversi Suhu\n")

opsi = int(input("Masukan opsi : "))
print("\n")

if opsi == 1:
    print ("Opsi 1 : Luas Persegi")
    print ("Opsi 2 : Keliling Persegi")
    print ("Opsi 3 : Luas Persegi Panjang")
    print ("Opsi 4 : Keliling Persegi Panjang")
    print ("Opsi 5 : Luas Lingkaran")
    print ("Opsi 6 : Keliling Lingkaran\n")

    opsi = int(input("Masukan opsi : "))
    print("\n")

    if opsi == 1:
        n = float(input("Masukan panjang sisi persegi : "))
        print ("Luas persegi adalah : ", mathops.luas_persegi(n))
    elif opsi == 2:
        n = float(input("Masukan panjang sisi persegi : "))
        print ("Keliling persegi adalah : ", mathops.keliling_persegi(n))
    elif opsi == 3:
        panjang = float(input("Masukan panjang persegi panjang : "))
        lebar = float(input("Masukan lebar persegi panjang : "))
        print ("Luas persegi panjang adalah : ", mathops.luas_persegi_panjang(panjang, lebar))
    elif opsi == 4:
        panjang = float(input("Masukan panjang persegi panjang : "))
        lebar = float(input("Masukan lebar persegi panjang : "))
        print ("Keliling persegi panjang adalah : ", mathops.keliling_persegi_panjang(panjang, lebar))
    elif opsi == 5:
        r = float(input("Masukan jari-jari lingkaran : "))
        print ("Luas lingkaran adalah : ", mathops.luas_lingkaran(r))
    elif opsi == 6:
        r = float(input("Masukan jari-jari lingkaran : "))
        print ("Keliling lingkaran adalah : ", mathops.keliling_lingkaran(r))
    else:
        print ("Opsi tidak tersedia")

elif opsi == 2:
    print ("Opsi 1 : Celcius ke Fahrenheit")
    print ("Opsi 2 : Fahrenheit ke Celcius")
    print ("Opsi 3 : Celcius ke Kelvin")
    print ("Opsi 4 : Kelvin ke Celcius")
    print ("Opsi 5 : Celcius ke Reamur\n")

    opsi = int(input("Masukan opsi : "))
    print("\n")

    if opsi == 1:
        c = float(input("Masukan suhu dalam Celcius : "))
        print ("Suhu dalam Fahrenheit adalah : ", mathops.celcius_to_fahrenheit(c))
    elif opsi == 2:
        f = float(input("Masukan suhu dalam Fahrenheit : "))
        print ("Suhu dalam Celcius adalah : ", mathops.fahrenheit_to_celcius(f))
    elif opsi == 3:
        c = float(input("Masukan suhu dalam Celcius : "))
        print ("Suhu dalam Kelvin adalah : ", mathops.celcius_to_kelvin(c))
    elif opsi == 4:
        k = float(input("Masukan suhu dalam Kelvin : "))
        print ("Suhu dalam Celcius adalah : ", mathops.kelvin_to_celcius(k))
    elif opsi == 5:
        c = float(input("Masukan suhu dalam Celcius : "))
        print ("Suhu dalam Reamur adalah : ", mathops.celcius_to_reamur(c))
    else:
        print ("Opsi tidak tersedia")
else:
    print ("Opsi tidak tersedia")