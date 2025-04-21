# Penghitung BMI

print ("========= Penghitung BMI (Body Mass Index) =========")

berat_badan = float(input("Masukan berat badan (kg) : "))
tinggi_badan = float(input("Masukan tinggi badan (cm) : "))

bmi = berat_badan / (tinggi_badan/100)**2


print (f"\nBMI anda adalah : {bmi:.2f}\n")

if bmi < 18.5:
    print("Anda termasuk kategori Underweight")
elif bmi < 25:
    print("Anda termasuk kategori Normal")
elif bmi < 30:
    print("Anda termasuk kategori Overweight")
else:
    print("Anda termasuk kategori Obesity")