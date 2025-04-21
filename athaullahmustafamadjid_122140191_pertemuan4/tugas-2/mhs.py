# Pengelolaan Data Mahasiswa

print("========= Pengelolaan Data Mahasiswa =========\n")

data_mhs = []


for i in range(2):
    data_mhs.append({})

    data_mhs[i]["nama"] = input(f"Masukan Nama Mahasiswa ke-{i+1} : ")
    data_mhs[i]["nim"] = input(f"Masukan NIM Mahasiswa ke-{i+1} : ")
    data_mhs[i]["nilai_uts"] = float(input(f"Masukan nilai UTS Mahasiswa ke-{i+1} : "))
    data_mhs[i]["nilai_uas"] = float(input(f"Masukan nilai UAS Mahasiswa ke-{i+1} : "))
    data_mhs[i]["nilai_tugas"] = float(input(f"Masukan nilai Tugas Mahasiswa ke-{i+1} : "))
    data_mhs[i]["nilai_akhir"] = ((0.3*data_mhs[i]["nilai_uts"]) + (0.4*data_mhs[i]["nilai_uas"]) + (0.3*data_mhs[i]["nilai_tugas"]))
    if data_mhs[i]["nilai_akhir"] >= 80:
        data_mhs[i]["grade"] = "A"
    elif data_mhs[i]["nilai_akhir"] >= 70:
        data_mhs[i]["grade"] = "B"
    elif data_mhs[i]["nilai_akhir"] >= 60:
        data_mhs[i]["grade"] = "C"
    elif data_mhs[i]["nilai_akhir"] >= 50:
        data_mhs[i]["grade"] = "D"
    else:
        data_mhs[i]["grade"] = "E"
    
    print("\n")

   
    

print("\n========= Tabel Data Mahasiswa =========\n")

print("{:<20} {:<20} {:<20} {:<20} {:<20} {:<20} {:<20}".format("Nama", "NIM", "Nilai UTS", "Nilai UAS", "Nilai Tugas", "Nilai Akhir","Grade"))
print("-"*120)
for i in data_mhs:
   print("{:<20} {:<20} {:<20} {:<20} {:<20} {:<20} {:<20}".format(i["nama"], i["nim"], i["nilai_uts"], i["nilai_uas"], i["nilai_tugas"], i["nilai_akhir"], i["grade"]))