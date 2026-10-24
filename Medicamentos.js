// ==========================================
// 1. VADEMÉCUM PREDETERMINADO (BASE DE DATOS COMPLETA)
// ==========================================
const DEFAULT_MEDICATIONS = [
    // ANALGÉSICOS / ANTIPIRÉTICOS / AINES
    { id: "med-paracetamol-120", nombre: "Paracetamol / Acetaminofén 120 mg / 5 ml (Atamel / Tempra / Tachipirin / Apiret)", categoria: "Analgésicos/Antipiréticos", concMg: 120, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "cada 4 a 6 horas", notas: "Suspensión pediátrica estándar (120 mg / 5 ml). Máximo 60 mg/kg/día o 4 g/día." },
    { id: "med-paracetamol-150", nombre: "Paracetamol / Acetaminofén 150 mg / 5 ml (Tempra / Dolex Infantil)", categoria: "Analgésicos/Antipiréticos", concMg: 150, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "cada 4 a 6 horas", notas: "Suspensión 150 mg / 5 ml. Máximo 60 mg/kg/día o 4 g/día." },
    { id: "med-paracetamol-180", nombre: "Paracetamol / Acetaminofén 180 mg / 5 ml (Tachipirin Forte / Apiret)", categoria: "Analgésicos/Antipiréticos", concMg: 180, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "cada 4 a 6 horas", notas: "Suspensión concentrada (180 mg / 5 ml). Menor volumen requerido en cc. Máximo 60 mg/kg/día." },
    { id: "med-paracetamol-gotas", nombre: "Paracetamol / Acetaminofén Gotas 100 mg / 1 ml (Atamel / Tempra / Apiret)", categoria: "Analgésicos/Antipiréticos", concMg: 100, concMl: 1, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "cada 4 a 6 horas", notas: "Gotas pediátricas: 2 a 3 gotas/kg/dosis (aprox. 100 mg/ml). Máximo 60 mg/kg/día." },
    { id: "med-paracetamol-tab", nombre: "Paracetamol / Acetaminofén Tabletas 500 mg", categoria: "Analgésicos/Antipiréticos", concMg: 500, concMl: 1, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "cada 4 a 6 horas", notas: "Tabletas para escolares y adolescentes (>30-40 kg) o adolescentes. Máximo 1 g/dosis o 4 g/día." },
    { id: "med-ibuprofeno", nombre: "Ibuprofeno 2% (Ibutan / Brugesic)", categoria: "Analgésicos/Antipiréticos", concMg: 100, concMl: 5, dosisMin: 5, dosisMaxKg: 10, tipoDosis: "dosis", dosisMaxAbs: 400, frecuencia: "cada 6 a 8 horas", notas: "Fórmula rápida: Peso/2 para jarabe 100mg/5ml. Administrar con alimentos." },
    { id: "med-diclofenac", nombre: "Diclofenac Potásico (Cataflam / Clofen)", categoria: "Analgésicos/Antipiréticos", concMg: 1.8, concMl: 1, dosisMin: 0.5, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 50, frecuencia: "dividido cada 8-12 horas", notas: "Gotas: 0.5 mg/gota (1 gota/kg/día cada 8-12h)." },
    { id: "med-ketoprofeno", nombre: "Ketoprofeno (Profenid)", categoria: "Analgésicos/Antipiréticos", concMg: 1, concMl: 1, dosisMin: 5, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "dividido cada 12 horas", notas: "Vía EV/IM: 1 mg/kg + Omeprazol." },
    { id: "med-dipirona", nombre: "Dipirona (Metamizol)", categoria: "Analgésicos/Antipiréticos", concMg: 300, concMl: 1, dosisMin: 10, dosisMaxKg: 20, tipoDosis: "dosis", dosisMaxAbs: 600, frecuencia: "cada 8 horas", notas: "EV/IM: 0.03 ml/kg/dosis con sol 0.9%." },
    { id: "med-asa", nombre: "Ácido Acetilsalicílico (ASA)", categoria: "Analgésicos/Antipiréticos", concMg: 125, concMl: 1, dosisMin: 30, dosisMaxKg: 65, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 6-8 horas", notas: "Precaución por Síndrome de Reye en infecciones virales." },
    { id: "med-naproxeno", nombre: "Naproxeno", categoria: "Analgésicos/Antipiréticos", concMg: 125, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1000, frecuencia: "dividido cada 12 horas", notas: "Ajustar con gastroprotector." },
    { id: "med-indometacina", nombre: "Indometacina", categoria: "Analgésicos/Antipiréticos", concMg: 25, concMl: 1, dosisMin: 2, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 200, frecuencia: "dividido cada 8-12 horas", notas: "No usar en menores de 5 años." },
    { id: "med-piroxicam", nombre: "Piroxicam", categoria: "Analgésicos/Antipiréticos", concMg: 7.5, concMl: 5, dosisMin: 0.2, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "cada 24 horas", notas: "Suspensión 7.5mg/5cc. Usar con precaución." },
    { id: "med-espasmoforte", nombre: "Espasmoforte", categoria: "Otros", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dosis", dosisMaxAbs: 4, frecuencia: "según indicación médica", notas: ">15 años dosis máxima 4 ampollas." },

    // ANTIBIÓTICOS - PENICILINAS Y DERIVADOS
    { id: "med-amoxicilina", nombre: "Amoxicilina (Amoxal)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 40, dosisMaxKg: 80, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 8 horas", notas: "Dosis alta en OMA / Neumonía: 80-90 mg/kg/día." },
    { id: "med-amoxiclav", nombre: "Amoxicilina + Clavulánico (Augmentin / Fulgram / Curam)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 80, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 8 horas", notas: "OMA: 90 mg/kg/día por 10 días." },
    { id: "med-ampicilina", nombre: "Ampicilina", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 200, tipoDosis: "dia", dosisMaxAbs: 12000, frecuencia: "dividido cada 6 horas", notas: "Dosis meníngea: 300 mg/kg/día cada 6 horas." },
    { id: "med-sultamicilina", nombre: "Ampicilina + Sulbactam (Unasyn)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 6 horas", notas: "Dosis meníngea: 300 mg/kg/día en 4 dosis." },
    { id: "med-penicilina-cristalina", nombre: "Penicilina G Sódica Cristalina", categoria: "Antibióticos", concMg: 1000000, concMl: 4, dosisMin: 100000, dosisMaxKg: 200000, tipoDosis: "dia", dosisMaxAbs: 24000000, frecuencia: "dividido cada 4 a 6 horas", notas: "Meningitis: 200.000-250.000 UI/kg/día." },
    { id: "med-penicilina-benzatinica", nombre: "Penicilina Benzatínica (Benzetacil)", categoria: "Antibióticos", concMg: 1200000, concMl: 4, dosisMin: 25000, dosisMaxKg: 50000, tipoDosis: "dosis", dosisMaxAbs: 1200000, frecuencia: "Dosis Única IM", notas: "<27 kg: 600.000 UI; >27 kg: 1.200.000 UI." },
    { id: "med-penicilina-procainica", nombre: "Penicilina G Procaínica", categoria: "Antibióticos", concMg: 400000, concMl: 1, dosisMin: 25000, dosisMaxKg: 50000, tipoDosis: "dia", dosisMaxAbs: 800000, frecuencia: "cada 12 u OD IM", notas: "Suspensión inyectable 400.000 y 800.000 UI." },
    { id: "med-oxacilina", nombre: "Oxacilina", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 12000, frecuencia: "dividido cada 6 horas", notas: "En infecciones estafilocócicas graves." },
    { id: "med-fenoximetilpenicilina", nombre: "Fenoximetilpenicilina", categoria: "Antibióticos", concMg: 125, concMl: 5, dosisMin: 50, dosisMaxKg: 50, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "dividido cada 8 horas", notas: "Cap 500mg, Susp 125-5cc." },

    // CEFALOSPORINAS
    { id: "med-cefadroxilo", nombre: "Cefadroxilo (Bidroxyl / Cefaval)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 30, dosisMaxKg: 50, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "dividido cada 12 horas", notas: "Cefalosporina de 1ra generación VO." },
    { id: "med-cefalexina", nombre: "Cefalexina (Keforal)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 25, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "dividido cada 6 a 8 horas", notas: "Excelente indicación en tejidos blandos." },
    { id: "med-cefazolina", nombre: "Cefazolina", categoria: "Antibióticos", concMg: 500, concMl: 2, dosisMin: 25, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "dividido cada 6 a 8 horas", notas: "IV o IM. Neumonía: hasta 150 mg/kg/día." },
    { id: "med-cefalotina", nombre: "Cefalotina", categoria: "Antibióticos", concMg: 1000, concMl: 1, dosisMin: 100, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "dividido cada 4 a 6 horas", notas: "1ra generación parenteral (Ampolla 1g)." },
    { id: "med-cefaclor", nombre: "Cefaclor (Ceclor)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 20, dosisMaxKg: 40, tipoDosis: "dia", dosisMaxAbs: 1000, frecuencia: "dividido cada 8 horas", notas: "Cefalosporina de 2da generación." },
    { id: "med-cefuroxima", nombre: "Cefuroxima (Zinnat / Zinacef)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 8 horas", notas: "Útil en infecciones respiratorias y urinarias." },
    { id: "med-ceftibuten", nombre: "Ceftibuten (Cedax)", categoria: "Antibióticos", concMg: 180, concMl: 5, dosisMin: 9, dosisMaxKg: 9, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "1 vez al día", notas: "Cefalosporina 3ra generación VO." },
    { id: "med-cefixime", nombre: "Cefixime (Longacef)", categoria: "Antibióticos", concMg: 100, concMl: 5, dosisMin: 8, dosisMaxKg: 8, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "OD o c/12h", notas: "Cefalosporina 3ra generación VO." },
    { id: "med-ceftriaxona", nombre: "Ceftriaxona (Rocephin)", categoria: "Antibióticos", concMg: 1000, concMl: 10, dosisMin: 20, dosisMaxKg: 80, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "cada 12 a 24 horas", notas: "Meningitis: 100 mg/kg/día c/12h." },
    { id: "med-cefotaxima", nombre: "Cefotaxima (Claforan)", categoria: "Antibióticos", concMg: 1000, concMl: 10, dosisMin: 100, dosisMaxKg: 150, tipoDosis: "dia", dosisMaxAbs: 12000, frecuencia: "dividido cada 6 a 8 horas", notas: "Meningitis: 200 mg/kg/día." },
    { id: "med-ceftazidima", nombre: "Ceftazidima (Fortún)", categoria: "Antibióticos", concMg: 1000, concMl: 10, dosisMin: 100, dosisMaxKg: 150, tipoDosis: "dia", dosisMaxAbs: 6000, frecuencia: "dividido cada 8 a 12 horas", notas: "Bbo 1g-10cc EV / 4cc IM." },
    { id: "med-cefepima", nombre: "Cefepima", categoria: "Antibióticos", concMg: 1000, concMl: 5, dosisMin: 100, dosisMaxKg: 150, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "dividido cada 12 horas", notas: "Bbo 1g-5cc. >28 días: 150 mg/Kg/día." },

    // MACRÓLIDOS Y AMINOGLUCÓSIDOS Y OTROS ANTIBIÓTICOS
    { id: "med-azitromicina", nombre: "Azitromicina (Zitromax / Azitromin)", categoria: "Antibióticos", concMg: 200, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 500, frecuencia: "1 vez al día por 3-5 días", notas: "Día 1: 10 mg/kg, Días 2-5: 5 mg/kg." },
    { id: "med-claritromicina", nombre: "Claritromicina (Klaricid / Lagur)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 15, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1000, frecuencia: "dividido cada 12 horas", notas: "No exceder 500 mg/12 horas." },
    { id: "med-eritromicina", nombre: "Eritromicina (Ilosone / Pantomicina)", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 30, dosisMaxKg: 50, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "dividido cada 6 a 8 horas", notas: "Indicado en coqueluche e infecciones atípicas." },
    { id: "med-gentamicina", nombre: "Gentamicina (Gentalyn)", categoria: "Antibióticos", concMg: 80, concMl: 2, dosisMin: 3.5, dosisMaxKg: 7.5, tipoDosis: "dia", dosisMaxAbs: 300, frecuencia: "dividido cada 8 a 12 horas", notas: "Monitorear función renal y ototoxicidad." },
    { id: "med-amikacina", nombre: "Amikacina (Biklin)", categoria: "Antibióticos", concMg: 500, concMl: 2, dosisMin: 15, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 12 horas", notas: "Ajustar por depuración renal." },
    { id: "med-vancomicina", nombre: "Vancomicina (Vagran)", categoria: "Antibióticos", concMg: 500, concMl: 10, dosisMin: 40, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "dividido cada 6 horas", notas: "Diluir dosis x 10 en SSF e infundir en 1 hora." },
    { id: "med-trimetoprim", nombre: "Trimetoprim/Sulfametoxazol (Bactrimel / Bactron)", categoria: "Antibióticos", concMg: 200, concMl: 5, dosisMin: 6, dosisMaxKg: 10, tipoDosis: "dia", dosisMaxAbs: 960, frecuencia: "dividido cada 12 horas", notas: "Cálculo basado en el componente Trimetoprim (TMP)." },
    { id: "med-kanamicicina", nombre: "Kanamicina", categoria: "Antibióticos", concMg: 1000, concMl: 4, dosisMin: 15, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "cada 24 horas", notas: "Amp 1g." },
    { id: "med-estreptomicina", nombre: "Estreptomicina", categoria: "Antibióticos", concMg: 1000, concMl: 1, dosisMin: 15, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1000, frecuencia: "cada 24 horas IM", notas: "Bbo 1g." },
    { id: "med-tobramicina", nombre: "Tobramicina", categoria: "Antibióticos", concMg: 100, concMl: 1, dosisMin: 3.5, dosisMaxKg: 7.5, tipoDosis: "dia", dosisMaxAbs: 300, frecuencia: "cada 24 horas", notas: "Amp 100mg." },
    { id: "med-doxiciclina", nombre: "Doxiciclina", categoria: "Antibióticos", concMg: 100, concMl: 1, dosisMin: 2, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 200, frecuencia: "cada 12 horas (1er día)", notas: "Cap 100mg. >12 años o >50kg. Luego 1 mg/Kg/día." },
    { id: "med-cloranfenicol", nombre: "Cloranfenicol", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 6 horas", notas: "Tab 250mg, Bbo 1g-4cc, Susp 125mg-5cc." },
    { id: "med-sulfadiacina", nombre: "Sulfadiacina", categoria: "Antibióticos", concMg: 500, concMl: 10, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "dividido cada 6 horas", notas: "Tab 500mg, Amp 1g-10cc." },
    { id: "med-ciprofloxacino", nombre: "Ciprofloxacino", categoria: "Antibióticos", concMg: 250, concMl: 5, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 12 horas", notas: "Tab 250mg, Susp 200mg/5cc, Bbo 200mg/100mL." },
    { id: "med-acido-nalidixico", nombre: "Ácido Nalidíxico", categoria: "Antibióticos", concMg: 500, concMl: 5, dosisMin: 50, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 6-12 horas", notas: "Tab 500mg, Susp 250mg-5cc." },
    { id: "med-norfloxacina", nombre: "Norfloxacina", categoria: "Antibióticos", concMg: 250, concMl: 1, dosisMin: 25, dosisMaxKg: 25, tipoDosis: "dia", dosisMaxAbs: 800, frecuencia: "dividido cada 12 horas", notas: "Tab 250mg." },
    { id: "med-nitrofurantoina", nombre: "Nitrofurantoína", categoria: "Antibióticos", concMg: 100, concMl: 1, dosisMin: 5, dosisMaxKg: 7, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "dividido cada 12 horas", notas: "Tab 100mg." },
    { id: "med-imipenem", nombre: "Imipenem", categoria: "Antibióticos", concMg: 500, concMl: 10, dosisMin: 40, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 4000, frecuencia: "dividido cada 6 horas", notas: "Bbo 250mg-5cc y 500mg-10cc." },
    { id: "med-aztreonam", nombre: "Aztreonam", categoria: "Antibióticos", concMg: 1000, concMl: 4, dosisMin: 100, dosisMaxKg: 150, tipoDosis: "dia", dosisMaxAbs: 8000, frecuencia: "dividido cada 8 horas", notas: "Bbo 500mg y 1g." },
    { id: "med-meronem", nombre: "Meropenem (Meronem)", categoria: "Antibióticos", concMg: 1000, concMl: 10, dosisMin: 60, dosisMaxKg: 80, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 8 horas", notas: "Bbo 500mg y 1g." },
    { id: "med-clindamicina", nombre: "Clindamicina (Bioclindax / Clindaval)", categoria: "Antibióticos", concMg: 150, concMl: 4, dosisMin: 20, dosisMaxKg: 40, tipoDosis: "dia", dosisMaxAbs: 1800, frecuencia: "dividido cada 8 horas", notas: "Tab 150mg, Amp 600mg-4cc." },
    { id: "med-fosfocina", nombre: "Fosfocina", categoria: "Antibióticos", concMg: 500, concMl: 1, dosisMin: 100, dosisMaxKg: 300, tipoDosis: "dia", dosisMaxAbs: 12000, frecuencia: "dividido cada 6 horas", notas: "Tab 500mg, Bbo 1g." },
    { id: "med-linezolid", nombre: "Linezolid", categoria: "Antibióticos", concMg: 600, concMl: 1, dosisMin: 20, dosisMaxKg: 30, tipoDosis: "dia", dosisMaxAbs: 1200, frecuencia: "dividido cada 8 a 12 horas", notas: "Tab 600mg. Duración máx 28 días." },

    // ANTITUBERCULOSOS (ANTI-TB)
    { id: "med-isoniacida", nombre: "Isoniacida", categoria: "Antibióticos", concMg: 150, concMl: 1, dosisMin: 10, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 300, frecuencia: "cada 24 horas", notas: "Tab 150mg." },
    { id: "med-rifampicina", nombre: "Rifampicina (Rimactan)", categoria: "Antibióticos", concMg: 300, concMl: 1, dosisMin: 10, dosisMaxKg: 10, tipoDosis: "dia", dosisMaxAbs: 600, frecuencia: "cada 24 horas", notas: "Cap 300mg, Jarabe 100mg/5ml." },
    { id: "med-pirazinamida", nombre: "Pirazinamida", categoria: "Antibióticos", concMg: 500, concMl: 1, dosisMin: 15, dosisMaxKg: 30, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "cada 24 horas", notas: "Tab 500mg." },
    { id: "med-etambutol", nombre: "Etambutol", categoria: "Antibióticos", concMg: 250, concMl: 1, dosisMin: 15, dosisMaxKg: 25, tipoDosis: "dia", dosisMaxAbs: 1000, frecuencia: "cada 24 horas", notas: "Tab 250mg." },
    { id: "med-clofazimina", nombre: "Clofazimina", categoria: "Antibióticos", concMg: 100, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 200, frecuencia: "según esquema de lepra", notas: "Tab 100mg." },
    { id: "med-dapsona", nombre: "Dapsona", categoria: "Antibióticos", concMg: 100, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "cada 24 horas", notas: "Tab 100mg." },

    // VÍAS RESPIRATORIAS, MUCOLÍTICOS Y ANTIASMÁTICOS
    { id: "med-salbutamol-jarabe", nombre: "Salbutamol (Jarabe / Aeroflux)", categoria: "Vías Respiratorias", concMg: 2, concMl: 5, dosisMin: 0.1, dosisMaxKg: 0.15, tipoDosis: "dosis", dosisMaxAbs: 4, frecuencia: "cada 8 horas", notas: "Nebulización: 1 gota cada 3 kg de peso." },
    { id: "med-ambroxol", nombre: "Ambroxol (Mucosolvan / Broxol / Mucorama / Ambroclar)", categoria: "Vías Respiratorias", concMg: 15, concMl: 5, dosisMin: 1.2, dosisMaxKg: 1.6, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "dividido cada 8-12 horas", notas: "2-5 años: 2.5 cc c/8h; 6-12 años: 5 cc c/8h." },
    { id: "med-clembuterol", nombre: "Clembuterol (Buclen)", categoria: "Vías Respiratorias", concMg: 0.005, concMl: 5, dosisMin: 0.001, dosisMaxKg: 0.002, tipoDosis: "dia", dosisMaxAbs: 0.04, frecuencia: "dividido cada 12 horas", notas: "Gotas: 1 gota/kg cada 12h en lactantes." },
    { id: "med-levodropropizina", nombre: "Levodropropizina (Antux / Levopront)", categoria: "Vías Respiratorias", concMg: 10, concMl: 5, dosisMin: 1, dosisMaxKg: 3, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "dividido cada 8 horas", notas: "No usar en menores de 2 años. Gotas: 1 gota/kg c/8h." },
    { id: "med-bromexina", nombre: "Bromexina (Bisolvon)", categoria: "Vías Respiratorias", concMg: 4, concMl: 5, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "cada 8 horas", notas: "Jarabe 4mg/5ml. Mucolítico y expectorante." },
    { id: "med-hedera-helix", nombre: "Hedera Helix (Prospan)", categoria: "Vías Respiratorias", concMg: 7, concMl: 5, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 10, frecuencia: "cada 8 horas", notas: "2-5 años: 2.5cc; 6-12 años: 5cc c/8h." },
    { id: "med-dextrometorfano", nombre: "Dextrometorfano (Teratos / Tilodrin)", categoria: "Vías Respiratorias", concMg: 15, concMl: 5, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 30, frecuencia: "cada 8 horas", notas: "Antitusígeno. Tilodrin gotas: 2 gotas/kg 3v/día." },
    { id: "med-kaloba", nombre: "Kaloba (Gotas)", categoria: "Vías Respiratorias", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 30, frecuencia: "cada 8 horas x 10 días", notas: "Gotas según peso/edad." },
    { id: "med-carboximetilcisteina", nombre: "Carboxi-metil-cisteína (Loviscol / Gulaper / Loganil)", categoria: "Vías Respiratorias", concMg: 100, concMl: 5, dosisMin: 1, dosisMaxKg: 4, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "4 veces al día", notas: "Gotas: 1 gota/kg 4v/día. Jbe 100mg/5ml." },
    { id: "med-bromuro-ipratropio", nombre: "Bromuro de Ipratropio (Alovent / Berodual)", categoria: "Vías Respiratorias", concMg: 0.25, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 20, frecuencia: "cada 6 a 8 horas", notas: "1 gota por kg de peso en solución fisiológica (máx 20 gotas)." },
    { id: "med-aminofilina", nombre: "Aminofilina", categoria: "Vías Respiratorias", concMg: 240, concMl: 10, dosisMin: 2, dosisMaxKg: 6, tipoDosis: "dosis", dosisMaxAbs: 250, frecuencia: "cada 8 horas EV", notas: "Infundir en 20-30 min en Sol. Dextrosa 5%." },
    { id: "med-cromoglicato", nombre: "Cromoglicato de Sodio (Intal)", categoria: "Vías Respiratorias", concMg: 20, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "cada 6 horas", notas: "Fco spray, Cap 20mg (2 puff c/6h)." },
    { id: "med-becloasma", nombre: "Becloasma", categoria: "Vías Respiratorias", concMg: 0.2, concMl: 1, dosisMin: 200, dosisMaxKg: 800, tipoDosis: "dia", dosisMaxAbs: 800, frecuencia: "según severidad", notas: "Fco spray. 1 puff = 200mcg." },
    { id: "med-epinefrina", nombre: "Epinefrina (Adrenalina)", categoria: "Vías Respiratorias", concMg: 1, concMl: 1, dosisMin: 0.01, dosisMaxKg: 0.03, tipoDosis: "dosis", dosisMaxAbs: 0.5, frecuencia: "SC cada 30 min", notas: "Amp 1mg-1cc. 10kg-1dec, 20kg-2dec, 30kg-3dec." },
    { id: "med-montelukast", nombre: "Montelukast", categoria: "Vías Respiratorias", concMg: 5, concMl: 1, dosisMin: 4, dosisMaxKg: 10, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "1 vez al día antes de acostarse", notas: "Tab 5mg y 10mg. 2-5 años: 4mg; 6-14 años: 5mg." },
    { id: "med-teofilina", nombre: "Teofilina", categoria: "Vías Respiratorias", concMg: 170, concMl: 1, dosisMin: 5, dosisMaxKg: 5, tipoDosis: "dosis", dosisMaxAbs: 300, frecuencia: "cada 8-12 horas", notas: "Tab 170mg, Sup 40mg y 100mg, Amp 250mg-10cc." },

    // CORTICOIDES
    { id: "med-prednisona", nombre: "Prednisona (Meticorten)", categoria: "Corticoides", concMg: 5, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "dividido cada 12 a 24 horas", notas: "Dosis máxima recomendada: 60 mg/día." },
    { id: "med-prednisolona", nombre: "Prednisolona (PediaCort / Sintisone)", categoria: "Corticoides", concMg: 13.5, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "dividido en 2 dosis", notas: "Ataque: 2 mg/kg/día; Mantenimiento: 1 mg/kg/día." },
    { id: "med-dexametasona", nombre: "Dexametasona (Decadron)", categoria: "Corticoides", concMg: 4, concMl: 1, dosisMin: 0.03, dosisMaxKg: 0.15, tipoDosis: "dosis", dosisMaxAbs: 16, frecuencia: "cada 6 a 8 horas", notas: "Meningitis bacteriana: 0.6 mg/kg/día." },
    { id: "med-hidrocortisona", nombre: "Hidrocortisona (SoluCortef)", categoria: "Corticoides", concMg: 100, concMl: 2, dosisMin: 5, dosisMaxKg: 10, tipoDosis: "dosis", dosisMaxAbs: 500, frecuencia: "cada 6 a 8 horas EV/IM", notas: "Ataque crisis asmática: 10 mg/kg/dosis." },
    { id: "med-metilprednisolona", nombre: "Metilprednisolona (SoluMedrol)", categoria: "Corticoides", concMg: 40, concMl: 1, dosisMin: 1, dosisMaxKg: 4, tipoDosis: "dia", dosisMaxAbs: 500, frecuencia: "dividido cada 8 a 12 horas", notas: "Ataque en asma grave: 3-5 mg/kg/dosis EV STAT." },
    { id: "med-prednisol", nombre: "Prednisol", categoria: "Corticoides", concMg: 20, concMl: 2, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "dividido al día", notas: "Amp 20mg-2cc, 25mg-1cc, 30mg-2cc." },
    { id: "med-betametasona", nombre: "Betametasona", categoria: "Corticoides", concMg: 4, concMl: 1, dosisMin: 0.4, dosisMaxKg: 0.4, tipoDosis: "dia", dosisMaxAbs: 8, frecuencia: "cada 6 horas EV-IM", notas: "Amp 4mg-1cc, amp 8mg-2cc." },

    // ANTIHISTAMÍNICOS, DESCONGESTIVOS Y ANTINUSEOSOS
    { id: "med-loratadina", nombre: "Loratadina (Clarityne / Lorex)", categoria: "Antihistamínicos", concMg: 5, concMl: 5, dosisMin: 0.2, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "1 vez al día", notas: "Peso/10 c/12h si se combina con seudoefedrina." },
    { id: "med-cetirizina", nombre: "Cetirizina (Zyrtec / Cetral / Celay / Talzic)", categoria: "Antihistamínicos", concMg: 5, concMl: 5, dosisMin: 0.25, dosisMaxKg: 0.3, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "cada 12 a 24 horas", notas: "<2 años: 1 gota/kg/día. 2-6 años: máx 5 mg/día." },
    { id: "med-difenhidramina", nombre: "Difenhidramina (Benadryl)", categoria: "Antihistamínicos", concMg: 12.5, concMl: 5, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dosis", dosisMaxAbs: 50, frecuencia: "cada 8 horas VO", notas: "Antihistamínico sedante. No en <2 años." },
    { id: "med-dexclorfeniramina", nombre: "Dexclorfeniramina (Polaramine)", categoria: "Antihistamínicos", concMg: 2, concMl: 5, dosisMin: 0.1, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 12, frecuencia: "dividido cada 4 a 6 horas", notas: "Tab 2mg, Susp 2mg-5cc." },
    { id: "med-ketotifeno", nombre: "Ketotifeno", categoria: "Antihistamínicos", concMg: 1, concMl: 5, dosisMin: 0.1, dosisMaxKg: 0.1, tipoDosis: "dia", dosisMaxAbs: 2, frecuencia: "cada 12 horas", notas: "Tab 1mg, Jarabe 1mg/5mL." },
    { id: "med-meclizina", nombre: "Meclizina", categoria: "Antihistamínicos", concMg: 25, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dosis", dosisMaxAbs: 50, frecuencia: "según indicación", notas: "Tab 25mg." },
    { id: "med-dimenhidrinato", nombre: "Dimenhidrinato (Gravinol)", categoria: "Antihistamínicos", concMg: 50, concMl: 1, dosisMin: 3, dosisMaxKg: 3, tipoDosis: "dia", dosisMaxAbs: 150, frecuencia: "dividido cada 8-12 horas", notas: "Tab 50mg, Amp 50mg/1cc, Sup 100mg." },
    { id: "med-ciproheptadina", nombre: "Ciproheptadina", categoria: "Antihistamínicos", concMg: 4, concMl: 1, dosisMin: 0.2, dosisMaxKg: 0.4, tipoDosis: "dia", dosisMaxAbs: 16, frecuencia: "dividido al día", notas: "Tab 4mg." },
    { id: "med-desloratadina", nombre: "Desloratadina (Desler M / con Montelukast)", categoria: "Antihistamínicos", concMg: 2.5, concMl: 5, dosisMin: 0.2, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 5, frecuencia: "cada 12 horas", notas: "Jarabe 2.5mg/5ml." },
    { id: "med-clorfeniramina", nombre: "Clorfeniramina (Clorotrimeton)", categoria: "Antihistamínicos", concMg: 10, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.1, tipoDosis: "dia", dosisMaxAbs: 4, frecuencia: "cada 8 horas", notas: "Tab 4mg, Amp 10mg/1cc." },
    { id: "med-zofran", nombre: "Ondansetrón (Zofran)", categoria: "Gastrointestinales", concMg: 4, concMl: 2, dosisMin: 0.15, dosisMaxKg: 0.15, tipoDosis: "dosis", dosisMaxAbs: 8, frecuencia: "dosis única / rescate", notas: "Amp 4mg-2ml." },

    // GASTROINTESTINALES, ANTIÁCIDOS Y ANTIGASES
    { id: "med-metoclopramida", nombre: "Metoclopramida (Primperan / Irtopan)", categoria: "Gastrointestinales", concMg: 5, concMl: 5, dosisMin: 0.2, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 15, frecuencia: "dividido cada 8 horas", notas: "Gotas 2.6 mg/ml, Jbe 5mg/5ml, Amp 10mg/2ml." },
    { id: "med-ranitidina", nombre: "Ranitidina", categoria: "Gastrointestinales", concMg: 75, concMl: 5, dosisMin: 2, dosisMaxKg: 4, tipoDosis: "dia", dosisMaxAbs: 150, frecuencia: "dividido cada 6 a 8 horas", notas: "EV: cada 6-8 horas. VO: cada 12 horas." },
    { id: "med-omeprazol", nombre: "Omeprazol", categoria: "Gastrointestinales", concMg: 20, concMl: 1, dosisMin: 0.3, dosisMaxKg: 1, tipoDosis: "dia", dosisMaxAbs: 40, frecuencia: "1 vez al día en ayunas", notas: "Parenteral o VO según evolución clínica." },
    { id: "med-hidroxido-aluminio", nombre: "Hidróxido de Aluminio (Alusil)", categoria: "Gastrointestinales", concMg: 500, concMl: 5, dosisMin: 0.5, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 15, frecuencia: "cada 8 horas", notas: "Tab 500mg, Fco 230ml. Dosis: 0.5 - 1 cc/Kg/dosis." },
    { id: "med-silogel", nombre: "Silogel", categoria: "Gastrointestinales", concMg: 525, concMl: 5, dosisMin: 0.5, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 15, frecuencia: "cada 8 horas", notas: "Tab 525mg, Susp 745mg-5cc." },
    { id: "med-simeticona", nombre: "Simeticona (Aeroflat / Flatoril)", categoria: "Gastrointestinales", concMg: 50, concMl: 5, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 100, frecuencia: "cada 6 a 8 horas después de comidas", notas: "Gotas / susp 50mg/5ml, tab 25mg." },
    { id: "med-milax", nombre: "Milax (Polvo)", categoria: "Gastrointestinales", concMg: 1000, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "1 vez al día en agua", notas: ">1 año: 1 medida en 4 oz de agua." },
    { id: "med-cimetidina", nombre: "Cimetidina", categoria: "Gastrointestinales", concMg: 200, concMl: 2, dosisMin: 20, dosisMaxKg: 40, tipoDosis: "dia", dosisMaxAbs: 800, frecuencia: "dividido al día", notas: "Tab 200mg, Amp 300mg-2cc." },
    { id: "med-domperidona", nombre: "Domperidona", categoria: "Gastrointestinales", concMg: 10, concMl: 5, dosisMin: 0.3, dosisMaxKg: 0.3, tipoDosis: "dia", dosisMaxAbs: 30, frecuencia: "cada 24 horas", notas: "Tab 10mg, Susp 5mg-5ml." },
    { id: "med-bismuto", nombre: "Subcitrato de Bismuto", categoria: "Gastrointestinales", concMg: 120, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "según indicación", notas: "Tab 120mg." },
    { id: "med-misoprostol", nombre: "Misoprostol", categoria: "Gastrointestinales", concMg: 0.2, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "según indicación", notas: "Tab 0,2mg." },
    { id: "med-sucralfato", nombre: "Sucralfato", categoria: "Gastrointestinales", concMg: 1000, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "según indicación", notas: "Tab 1g, Polvo/Sobre 1g." },

    // ANTICONVULSIVANTES
    { id: "med-diazepam", nombre: "Diazepam (Valium)", categoria: "Anticonvulsivantes", concMg: 10, concMl: 2, dosisMin: 0.2, dosisMaxKg: 0.5, tipoDosis: "dosis", dosisMaxAbs: 10, frecuencia: "EV lento / Vía Rectal", notas: "Pasar en 5-10 min sin diluir. Máximo 2 dosis." },
    { id: "med-fenobarbital", nombre: "Fenobarbital", categoria: "Anticonvulsivantes", concMg: 40, concMl: 1, dosisMin: 3, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 200, frecuencia: "dividido cada 12 horas", notas: "Ataque: 15-20 mg/kg STAT." },
    { id: "med-fenitoina", nombre: "Fenitoína / Difenilhidantoína (Epamin)", categoria: "Anticonvulsivantes", concMg: 125, concMl: 5, dosisMin: 5, dosisMaxKg: 8, tipoDosis: "dia", dosisMaxAbs: 300, frecuencia: "dividido cada 8 a 12 horas", notas: "Ataque: 15-20 mg/kg STAT EV lento." },
    { id: "med-valproato", nombre: "Valproato de Sodio", categoria: "Anticonvulsivantes", concMg: 250, concMl: 5, dosisMin: 30, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 8 a 12 horas", notas: "Monitorear perfil hepático." },
    { id: "med-carbamazepina", nombre: "Carbamazepina", categoria: "Anticonvulsivantes", concMg: 200, concMl: 1, dosisMin: 10, dosisMaxKg: 20, tipoDosis: "dia", dosisMaxAbs: 1200, frecuencia: "dividido cada 12 horas", notas: "Tab 200mg." },
    { id: "med-valproato-mg", nombre: "Valproato de Magnesio", categoria: "Anticonvulsivantes", concMg: 190, concMl: 1, dosisMin: 30, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 2500, frecuencia: "dividido al día", notas: "Tab 190mg." },
    { id: "med-vigabatrina", nombre: "Vigabatrina", categoria: "Anticonvulsivantes", concMg: 500, concMl: 1, dosisMin: 60, dosisMaxKg: 60, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido al día", notas: "Tab 500mg." },
    { id: "med-clonazepam", nombre: "Clonazepam", categoria: "Anticonvulsivantes", concMg: 1, concMl: 1, dosisMin: 0.05, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "dividido al día", notas: "Tab 1mg." },
    { id: "med-clobazam", nombre: "Clobazam", categoria: "Anticonvulsivantes", concMg: 20, concMl: 1, dosisMin: 1, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 80, frecuencia: "dividido al día", notas: "Tab 20mg." },
    { id: "med-etosuximida", nombre: "Etosuximida", categoria: "Anticonvulsivantes", concMg: 250, concMl: 1, dosisMin: 20, dosisMaxKg: 20, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido al día", notas: "Cap 250mg." },
    { id: "med-nitrazepam", nombre: "Nitrazepam", categoria: "Anticonvulsivantes", concMg: 5, concMl: 1, dosisMin: 0.2, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "dividido al día", notas: "Tab 5mg." },

    // ANTIPARASITARIOS
    { id: "med-albendazol", nombre: "Albendazol (Zentel)", categoria: "Antiparasitarios", concMg: 400, concMl: 10, dosisMin: 200, dosisMaxKg: 400, tipoDosis: "dosis", dosisMaxAbs: 400, frecuencia: "Dosis Única VO", notas: "<2 años: 200 mg. >2 años: 400 mg STAT." },
    { id: "med-metronidazol", nombre: "Metronidazol (Flagyl / Metren)", categoria: "Antiparasitarios", concMg: 250, concMl: 5, dosisMin: 30, dosisMaxKg: 50, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 8 horas x 7 días", notas: "Giardiasis: 20-30 mg/kg/día en 2 dosis." },
    { id: "med-nitazoxanida", nombre: "Nitazoxanida (Givotan / Celectan)", categoria: "Antiparasitarios", concMg: 100, concMl: 5, dosisMin: 7.5, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "dividido cada 12 horas x 3 días", notas: "2-4 años: 100 mg c/12h; 5-11 años: 200 mg c/12h." },
    { id: "med-secnidazol", nombre: "Secnidazol (Secnidal)", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 30, dosisMaxKg: 30, tipoDosis: "dosis", dosisMaxAbs: 2000, frecuencia: "Dosis Única VO", notas: "Susp 500mg y 750mg. Repetir a los 15 días." },
    { id: "med-quinacrina", nombre: "Clorhidrato de Quinacrina", categoria: "Antiparasitarios", concMg: 100, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "según indicación", notas: "Tab 250mg y Tab 100mg." },
    { id: "med-tinidazol", nombre: "Tinidazol", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 50, dosisMaxKg: 50, tipoDosis: "dosis", dosisMaxAbs: 2000, frecuencia: "Dosis Única", notas: "Tab 500mg." },
    { id: "med-ornidazol", nombre: "Ornidazol", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 40, dosisMaxKg: 40, tipoDosis: "dosis", dosisMaxAbs: 2000, frecuencia: "Dosis Única", notas: "Tab 500mg." },
    { id: "med-paramomicina", nombre: "Paramomicina", categoria: "Antiparasitarios", concMg: 250, concMl: 1, dosisMin: 30, dosisMaxKg: 30, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 8 horas x días", notas: "Cap 250mg." },
    { id: "med-diloxanida", nombre: "Diloxanida (Amebiasis crónica)", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 20, dosisMaxKg: 20, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "dividido cada 8 horas", notas: "Tab 500mg." },
    { id: "med-furodone", nombre: "Furodone", categoria: "Antiparasitarios", concMg: 100, concMl: 5, dosisMin: 6, dosisMaxKg: 10, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "cada 24 horas x 7-10 días", notas: "Tab 100mg, Susp 16,65mg-5cc." },
    { id: "med-mebendazol", nombre: "Mebendazol", categoria: "Antiparasitarios", concMg: 100, concMl: 1, dosisMin: 50, dosisMaxKg: 100, tipoDosis: "dia", dosisMaxAbs: 200, frecuencia: "dividido cada 12 horas x 3 días", notas: "Tab 100mg. <3 años: 50mg c/12h; >3 años: 100mg c/12h." },
    { id: "med-levamisol", nombre: "Levamisol", categoria: "Antiparasitarios", concMg: 150, concMl: 1, dosisMin: 2.5, dosisMaxKg: 2.5, tipoDosis: "dosis", dosisMaxAbs: 150, frecuencia: "Dosis única", notas: "Tab 150mg, Gotas 10mg-1cc." },
    { id: "med-tiabendazol", nombre: "Tiabendazol", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 30, dosisMaxKg: 30, tipoDosis: "dia", dosisMaxAbs: 1500, frecuencia: "cada 24 horas x 5 días", notas: "Tab 500mg." },
    { id: "med-piperazina", nombre: "Piperazina (Ciperina / Piperazil)", categoria: "Antiparasitarios", concMg: 500, concMl: 5, dosisMin: 50, dosisMaxKg: 150, tipoDosis: "dia", dosisMaxAbs: 3500, frecuencia: "cada 24 horas", notas: "Jarabe 500mg/5cc. <2A: 50mg/kg/día; >2A: 75mg/kg/día." },
    { id: "med-pirantel", nombre: "Pamoato de Pirantel", categoria: "Antiparasitarios", concMg: 250, concMl: 5, dosisMin: 10, dosisMaxKg: 12, tipoDosis: "dosis", dosisMaxAbs: 1000, frecuencia: "Dosis Única", notas: "Susp 50mg/ml. Repetir a los 15 días." },
    { id: "med-prazicuantel", nombre: "Prazicuantel", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 10, dosisMaxKg: 75, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 8 horas x 3-5 días", notas: "Tab 500mg." },
    { id: "med-niclosanida", nombre: "Niclosanida (Yomesán)", categoria: "Antiparasitarios", concMg: 500, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "Dosis Única", notas: "Tab 500mg. 11-34Kg: 2 tab; >34Kg: 3 tab." },
    { id: "med-ivermectina", nombre: "Ivermectina", categoria: "Antiparasitarios", concMg: 6, concMl: 1, dosisMin: 50, dosisMaxKg: 200, tipoDosis: "dosis", dosisMaxAbs: 400, frecuencia: "Dosis Única", notas: "Tab. Dosis en mcg/Kg/día." },
    { id: "med-emetina", nombre: "Emetina (Fasciola hepática)", categoria: "Antiparasitarios", concMg: 20, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dia", dosisMaxAbs: 60, frecuencia: "IM x 7 días", notas: "Amp 20mg." },

    // ELECTROLITOS, SOLUCIONES, VITAMINAS Y MINERALES
    { id: "med-cloruro-sodio", nombre: "Cloruro de Sodio 0.9%", categoria: "Cardiovascular/Diuréticos", concMg: 9, concMl: 1, dosisMin: 2, dosisMaxKg: 4, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "según superficie corporal / hidratación", notas: "R/N-7d: 4cc; 7d-1m: 5cc; 1m-2a: 7cc; 2a-7a: 10cc; >7a: 20cc (20-40 mEq/m² SC)." },
    { id: "med-dextrosa", nombre: "Dextrosa (Soluciones Glucosadas)", categoria: "Cardiovascular/Diuréticos", concMg: 50, concMl: 1, dosisMin: 2, dosisMaxKg: 4, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "infusión continua", notas: "Ampollas: 10% (25g/10cc), 20% (4g/20cc), 50% (10g/20cc). Dosis: 2-4 cc/Kg." },
    { id: "med-sulfato-magnesio", nombre: "Sulfato de Magnesio", categoria: "Cardiovascular/Diuréticos", concMg: 100, concMl: 1, dosisMin: 0.3, dosisMaxKg: 0.3, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "cada 24 horas EV/IM", notas: "Ampolla 10% - 1g / 10cc." },
    { id: "med-gluconato-potasio", nombre: "Gluconato de Potasio (Polisal)", categoria: "Cardiovascular/Diuréticos", concMg: 25.6, concMl: 1, dosisMin: 2, dosisMaxKg: 3, tipoDosis: "dia", dosisMaxAbs: null, frecuencia: "en 24 horas", notas: "Ampolla 25.6 mEq - 20cc. Diluir 2cc por cada 100ml de dextrosa." },
    { id: "med-bicarbonato-sodio", nombre: "Bicarbonato de Sodio", categoria: "Cardiovascular/Diuréticos", concMg: 50, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dosis", dosisMaxAbs: 40, frecuencia: "EV lento en SSF", notas: "Ampolla 4% (0.5 mEq/cc) y 8% (1 mEq/cc). mEq = 0.5 x kg x (RAN-RAP). Máx: 40cc/dosis." },
    { id: "med-gluconato-calcio", nombre: "Gluconato de Calcio 10%", categoria: "Cardiovascular/Diuréticos", concMg: 100, concMl: 1, dosisMin: 2, dosisMaxKg: 5, tipoDosis: "dosis", dosisMaxAbs: 10, frecuencia: "Dosis única", notas: "Ampolla 10% - 1g en 10cc. Dosis: 0.5 cc/kg/día." },
    { id: "med-albumina-humana", nombre: "Albúmina Humana 20%", categoria: "Otros", concMg: 200, concMl: 1, dosisMin: 5, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: null, frecuencia: "Dosis diaria según indicación", notas: "Frasco 20% 50cc. Dosis: 5 cc/Kg/día." },
    { id: "med-vitamina-a", nombre: "Vitamina A (Retinol)", categoria: "Vitaminas/Minerales", concMg: 25000, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dia", dosisMaxAbs: null, frecuencia: "según indicación", notas: "Tableta 25,000 UI." },
    { id: "med-vitamina-ayd", nombre: "Vitamina A y D (Gotas)", categoria: "Vitaminas/Minerales", concMg: 25000, concMl: 1, dosisMin: 5, dosisMaxKg: 5, tipoDosis: "dosis", dosisMaxAbs: 5, frecuencia: "5 gotas al día", notas: "Gotas 25,000 UI y 2,000 UI." },
    { id: "med-vitamina-d2", nombre: "Vitamina D2", categoria: "Vitaminas/Minerales", concMg: 200000, concMl: 1, dosisMin: 10, dosisMaxKg: 25, tipoDosis: "dia", dosisMaxAbs: 25, frecuencia: "cada 24 horas", notas: "Ampolla 200,000 UI/1cc. 1mg = 4,000 UI." },
    { id: "med-vitamina-e", nombre: "Vitamina E (Tocoferol)", categoria: "Vitaminas/Minerales", concMg: 50, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "cada 24 horas", notas: "Tab 50mg y 100mg. Dosis: 1 mg/Kg/día." },
    { id: "med-vitamina-b1", nombre: "Vitamina B1 (Tiamina)", categoria: "Vitaminas/Minerales", concMg: 50, concMl: 1, dosisMin: 10, dosisMaxKg: 50, tipoDosis: "dia", dosisMaxAbs: 50, frecuencia: "cada 24 horas", notas: "Tab 50mg, bbo 100mg-5cc." },
    { id: "med-vitamina-b2", nombre: "Vitamina B2 (Riboflavina)", categoria: "Vitaminas/Minerales", concMg: 5, concMl: 1, dosisMin: 2, dosisMaxKg: 10, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "cada 24 horas", notas: "Tab 5 mg." },
    { id: "med-vitamina-b6", nombre: "Vitamina B6 (Piridoxina)", categoria: "Vitaminas/Minerales", concMg: 10, concMl: 1, dosisMin: 10, dosisMaxKg: 20, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "cada 24 horas", notas: "Tab 10mg, amp 25mg-1cc, amp 50mg-1cc." },
    { id: "med-vitamina-b12", nombre: "Vitamina B12 (Hidroxicianocobalamina)", categoria: "Vitaminas/Minerales", concMg: 100, concMl: 5, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dia", dosisMaxAbs: 1, frecuencia: "cada 24 horas", notas: "Bbo 100mg-5cc, Bbo 1000mg-5cc. <1 año: 5 dec/día; >1 año: 1cc/día." },
    { id: "med-vitamina-c", nombre: "Vitamina C (Ácido ascórbico)", categoria: "Vitaminas/Minerales", concMg: 500, concMl: 1, dosisMin: 30, dosisMaxKg: 45, tipoDosis: "dia", dosisMaxAbs: 500, frecuencia: "cada 24 horas", notas: "Tab 500mg, Amp 200mg-2cc, Gotas 155mg-20gotas." },
    { id: "med-multivitaminas", nombre: "Multivitaminas (Gotas)", categoria: "Vitaminas/Minerales", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 20, frecuencia: "cada 24 horas", notas: "-1 año: 10 gotas/día; +1 año: 20 gotas/día." },
    { id: "med-polivit", nombre: "Polivit (Jarabe/Tab)", categoria: "Vitaminas/Minerales", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 1, frecuencia: "cada 24 horas", notas: "-9 años: ½ tab/día; +9 años: 1 tab/día." },
    { id: "med-acido-folico", nombre: "Ácido Fólico", categoria: "Vitaminas/Minerales", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 5, frecuencia: "1 vez al día", notas: "Tab 1mg, amp 1mg-1cc, Tab 5mg. Dosis: 1 tab/día." },
    { id: "med-sulfato-zinc", nombre: "Sulfato de Zinc", categoria: "Vitaminas/Minerales", concMg: 5, concMl: 5, dosisMin: 10, dosisMaxKg: 20, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "cada 24 horas x 10-14 días", notas: "Susp 5mg-5cc y 10mg-5cc." },
    { id: "med-fumarato-ferroso", nombre: "Fumarato Ferroso (Forferr / Ferganic / Intafer)", categoria: "Vitaminas/Minerales", concMg: 65, concMl: 1, dosisMin: 1, dosisMaxKg: 6, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "dividido cada 12-24 horas", notas: "Tab 200mg (65mg Fe elem), Susp 150mg-5cc (45mg Fe). Anemia: 4-6 mg/Kg/día." },
    { id: "med-carbonato-calcio", nombre: "Carbonato de Calcio", categoria: "Vitaminas/Minerales", concMg: 500, concMl: 1, dosisMin: 400, dosisMaxKg: 800, tipoDosis: "dia", dosisMaxAbs: 800, frecuencia: "dividido al día", notas: "Tab 500mg, Tab 1g. -3 años: 400-800 mg/día; 4-10 años: 800 mg/día." },

    // ANTIMICÓTICOS Y ANTIVIRALES
    { id: "med-ketoconazol", nombre: "Ketoconazol", categoria: "Antimicóticos/Antivirales", concMg: 200, concMl: 1, dosisMin: 3, dosisMaxKg: 6, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "dividido cada 12 a 24 horas", notas: "Tab 200mg." },
    { id: "med-nistatina", nombre: "Nistatina", categoria: "Antimicóticos/Antivirales", concMg: 500000, concMl: 5, dosisMin: 100000, dosisMaxKg: 400000, tipoDosis: "dosis", dosisMaxAbs: 400000, frecuencia: "cada 6 horas VO", notas: "Susp 500.000 UI-5cc." },
    { id: "med-miconazol", nombre: "Miconazol", categoria: "Antimicóticos/Antivirales", concMg: 10, concMl: 20, dosisMin: 20, dosisMaxKg: 40, tipoDosis: "dia", dosisMaxAbs: 1200, frecuencia: "dividido cada 6-8 horas EV", notas: "Crema 2% y Amp 10mg-20cc." },
    { id: "med-anfotericina", nombre: "Anfotericina B", categoria: "Antimicóticos/Antivirales", concMg: 50, concMl: 1, dosisMin: 0.1, dosisMaxKg: 1.5, tipoDosis: "dia", dosisMaxAbs: 50, frecuencia: "cada 24 horas EV en infusión lenta", notas: "Tab 100mg, Bbo 50mg. Ir en aumento progresivo." },
    { id: "med-fluconazol", nombre: "Fluconazol", categoria: "Antimicóticos/Antivirales", concMg: 100, concMl: 5, dosisMin: 6, dosisMaxKg: 12, tipoDosis: "dia", dosisMaxAbs: 400, frecuencia: "cada 24 horas VO o EV", notas: "Cap 100mg, Susp 100mg-5cc, Bbo 200mg." },
    { id: "med-aciclovir", nombre: "Aciclovir", categoria: "Antimicóticos/Antivirales", concMg: 250, concMl: 10, dosisMin: 5, dosisMaxKg: 30, tipoDosis: "dia", dosisMaxAbs: 3000, frecuencia: "dividido cada 8 horas", notas: "Tab 200mg, Bbo 250mg-10cc, Crema 5%, Ungüento 3%." },
    { id: "med-oseltamivir", nombre: "Oseltamivir (Tamiflú)", categoria: "Antimicóticos/Antivirales", concMg: 75, concMl: 1, dosisMin: 2, dosisMaxKg: 4, tipoDosis: "dia", dosisMaxAbs: 150, frecuencia: "dividido cada 12 horas x 5 días", notas: "Tab/Cap 75mg. Ajustar peso según papelillos pediátricos (30-75mg)." },

    // ENDOCRINO (DIABETES, HIPOGLICEMIA, TIROIDES)
    { id: "med-insulina-regular", nombre: "Insulina Rápida (Regular / Simple)", categoria: "Otros", concMg: 100, concMl: 1, dosisMin: 0.2, dosisMaxKg: 1.5, tipoDosis: "dia", dosisMaxAbs: null, frecuencia: "dividido antes de comidas", notas: "Bbo 100 UI/cc. <5 años: 0.2-0.3 UI/kg/día; >5 años: 0.5 UI/kg/día." },
    { id: "med-insulina-nph", nombre: "Insulina NPH (Intermedia / Lenta)", categoria: "Otros", concMg: 100, concMl: 1, dosisMin: 0.2, dosisMaxKg: 1.5, tipoDosis: "dia", dosisMaxAbs: null, frecuencia: "1 a 2 veces al día", notas: "Bbo 100 UI/cc. Ajuste según glicemia." },
    { id: "med-glucagon", nombre: "Glucagón", categoria: "Otros", concMg: 1, concMl: 1, dosisMin: 0.3, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 1, frecuencia: "Dosis única SC o IM", notas: "Bbo 1mg-1cc. <5 años: 0.3mg; 5-10 años: 0.5mg; >10 años: 1mg." },
    { id: "med-levotiroxina", nombre: "Levotiroxina Sódica", categoria: "Otros", concMg: 0.1, concMl: 1, dosisMin: 2, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 0.2, frecuencia: "cada 24 horas en ayunas", notas: "Tab 0.1mg (100mcg). Dosis en mcg/Kg/día según edad." },

    // CARDIOVASCULAR (INSUFICIENCIA CARDÍACA, HTA, ANTIARRÍTMICOS)
    { id: "med-digoxina", nombre: "Digoxina", categoria: "Cardiovascular/Diuréticos", concMg: 0.25, concMl: 1, dosisMin: 0.01, dosisMaxKg: 0.03, tipoDosis: "dosis", dosisMaxAbs: 0.5, frecuencia: "Ataque y mantenimiento", notas: "Tab 0.25mg, Amp 0.5mg-2cc, Gotas 0.05mg/gota." },
    { id: "med-furosemida", nombre: "Furosemida", categoria: "Cardiovascular/Diuréticos", concMg: 20, concMl: 2, dosisMin: 1, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "dividido cada 6 a 12 horas", notas: "Tab 40mg, Amp 20mg-2cc y 50mg-3cc." },
    { id: "med-hidroclorotiazida", nombre: "Hidroclorotiazida", categoria: "Cardiovascular/Diuréticos", concMg: 25, concMl: 1, dosisMin: 1, dosisMaxKg: 2.5, tipoDosis: "dia", dosisMaxAbs: 4, frecuencia: "dividido al día", notas: "Tab 25mg." },
    { id: "med-espironolactona", nombre: "Espironolactona", categoria: "Cardiovascular/Diuréticos", concMg: 25, concMl: 1, dosisMin: 1, dosisMaxKg: 3, tipoDosis: "dia", dosisMaxAbs: 200, frecuencia: "dividido cada 6 a 12 horas", notas: "Tab 25mg." },
    { id: "med-clortalidona", nombre: "Clortalidona", categoria: "Cardiovascular/Diuréticos", concMg: 50, concMl: 1, dosisMin: 0.5, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "cada 24 horas", notas: "Tab 50mg." },
    { id: "med-atenolol", nombre: "Atenolol", categoria: "Cardiovascular/Diuréticos", concMg: 100, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "cada 12 a 24 horas", notas: "Tab 100mg." },
    { id: "med-propranolol", nombre: "Propranolol", categoria: "Cardiovascular/Diuréticos", concMg: 10, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 6, frecuencia: "dividido cada 6 a 12 horas", notas: "Tab 10mg y 40mg." },
    { id: "med-captopril", nombre: "Captopril", categoria: "Cardiovascular/Diuréticos", concMg: 25, concMl: 1, dosisMin: 0.3, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 6, frecuencia: "dividido cada 8 horas", notas: "Tab 25mg." },
    { id: "med-enalapril", nombre: "Enalapril", categoria: "Cardiovascular/Diuréticos", concMg: 20, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 40, frecuencia: "dividido cada 12 a 24 horas", notas: "Tab 20mg." },
    { id: "med-nifedipino", nombre: "Nifedipino (Corinfar)", categoria: "Cardiovascular/Diuréticos", concMg: 10, concMl: 1, dosisMin: 0.25, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 3, frecuencia: "dividido cada 6 a 8 horas", notas: "Tab 10mg." },
    { id: "med-verapamilo", nombre: "Verapamilo", categoria: "Cardiovascular/Diuréticos", concMg: 80, concMl: 2, dosisMin: 3, dosisMaxKg: 7, tipoDosis: "dia", dosisMaxAbs: 480, frecuencia: "dividido cada 12 horas", notas: "Tab 80mg, Amp 5mg-2cc." },
    { id: "med-diltiazem", nombre: "Diltiazem", categoria: "Cardiovascular/Diuréticos", concMg: 60, concMl: 4, dosisMin: 1.5, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 360, frecuencia: "dividido cada 8 horas", notas: "Tab 60mg, Bbo 25mg-4cc." },
    { id: "med-hidralazina", nombre: "Hidralazina", categoria: "Cardiovascular/Diuréticos", concMg: 50, concMl: 1, dosisMin: 1, dosisMaxKg: 2, tipoDosis: "dia", dosisMaxAbs: 8, frecuencia: "dividido cada 6 a 12 horas", notas: "Tab 50mg, Amp 20mg-1cc." },
    { id: "med-labetalol", nombre: "Labetalol", categoria: "Cardiovascular/Diuréticos", concMg: 100, concMl: 20, dosisMin: 2, dosisMaxKg: 3, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "dividido cada 12 horas", notas: "Amp 100mg-20cc." },
    { id: "med-atropina", nombre: "Atropina", categoria: "Otros", concMg: 0.5, concMl: 1, dosisMin: 0.02, dosisMaxKg: 0.02, tipoDosis: "dosis", dosisMaxAbs: 0.5, frecuencia: "Dosis única EV", notas: "Amp 0.5mg-1cc y 1mg-1cc." },
    { id: "med-amiodarona", nombre: "Amiodarona", categoria: "Cardiovascular/Diuréticos", concMg: 200, concMl: 3, dosisMin: 5, dosisMaxKg: 5, tipoDosis: "dia", dosisMaxAbs: 15, frecuencia: "cada 24 horas", notas: "Tab 200mg, Amp 150-3cc." },
    { id: "med-lidocaina", nombre: "Lidocaína 2%", categoria: "Otros", concMg: 20, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.1, tipoDosis: "dosis", dosisMaxAbs: 12, frecuencia: "Dosis única EV", notas: "Amp 2% 2cc (y presentaciones locales)." },
    { id: "med-adenosina", nombre: "Adenosina", categoria: "Cardiovascular/Diuréticos", concMg: 6, concMl: 2, dosisMin: 0.1, dosisMaxKg: 0.1, tipoDosis: "dosis", dosisMaxAbs: 12, frecuencia: "Dosis única rápida EV", notas: "Amp 6mg-2cc." },
    { id: "med-procainamida", nombre: "Procainamida", categoria: "Cardiovascular/Diuréticos", concMg: 100, concMl: 1, dosisMin: 15, dosisMaxKg: 15, tipoDosis: "dia", dosisMaxAbs: 2000, frecuencia: "cada 24 horas", notas: "Amp 100mg-1cc." },

    // TÓPICOS, DERMATOLÓGICOS Y OTROS
    { id: "med-bacitracina", nombre: "Bacitracina (Crema)", categoria: "Otros", concMg: 500, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "2 a 3 veces al día", notas: "Aplicar en sitio de lesión durante el baño." },
    { id: "med-acido-fusidico", nombre: "Ácido Fusídico (Fucidin)", categoria: "Otros", concMg: 20, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "3 veces al día", notas: "Crema/ungüento tópico." },
    { id: "med-mupirocina", nombre: "Mupirocina (Muproban / Bactroban)", categoria: "Otros", concMg: 20, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "3 veces al día por 7-10 días", notas: "Ungüento tópico." },
    { id: "med-baycuten", nombre: "Baycuten (Crema)", categoria: "Otros", concMg: 10, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: null, frecuencia: "2 a 3 veces al día", notas: "Clotrimazol + Dexametasona + Neomicina." },
    { id: "med-morfina", nombre: "Morfina", categoria: "Otros", concMg: 10, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "dividido al día", notas: "Amp 10mg-1cc." },
    { id: "med-bisacodilo", nombre: "Bisacodilo", categoria: "Otros", concMg: 5, concMl: 1, dosisMin: 0.3, dosisMaxKg: 0.3, tipoDosis: "dosis", dosisMaxAbs: 10, frecuencia: "dosis única", notas: "Tab 5mg, Sup 10mg." },
    { id: "med-picosulfato", nombre: "Picosulfato de Sodio", categoria: "Otros", concMg: 1, concMl: 1, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 20, frecuencia: "cada 24 horas (efecto 6-10h)", notas: "Fco 30ml." },
    { id: "med-amitriptilina", nombre: "Amitriptilina", categoria: "Otros", concMg: 25, concMl: 1, dosisMin: 0.3, dosisMaxKg: 0.7, tipoDosis: "dia", dosisMaxAbs: 3, frecuencia: "dividido al día", notas: "Tab 25mg." },
    { id: "med-imipramina", nombre: "Imipramina", categoria: "Otros", concMg: 25, concMl: 2, dosisMin: 0.22, dosisMaxKg: 0.5, tipoDosis: "dia", dosisMaxAbs: 100, frecuencia: "dividido al día", notas: "Tab 25mg, Amp 25mg-2cc." },
    { id: "med-metilfenidato", nombre: "Metilfenidato", categoria: "Otros", concMg: 10, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.2, tipoDosis: "dia", dosisMaxAbs: 10, frecuencia: "dividido al día", notas: "Tab 10mg." },
    { id: "med-trifluoperazina", nombre: "Trifluoperazina", categoria: "Otros", concMg: 5, concMl: 1, dosisMin: 0.1, dosisMaxKg: 0.3, tipoDosis: "dia", dosisMaxAbs: 20, frecuencia: "dividido al día", notas: "Tab 1mg y 5mg." },
    { id: "med-heparina", nombre: "Heparina", categoria: "Otros", concMg: 250, concMl: 5, dosisMin: 1, dosisMaxKg: 1, tipoDosis: "dosis", dosisMaxAbs: 5000, frecuencia: "cada 4 horas EV", notas: "Bbo 250mg-5cc." },
    { id: "med-interferon", nombre: "Interferón Alfa 2 Beta Recombinante", categoria: "Otros", concMg: 3000000, concMl: 2, dosisMin: 1000000, dosisMaxKg: 1000000, tipoDosis: "dosis", dosisMaxAbs: 3000000, frecuencia: "dosis única", notas: "Bbo 3.000.000 UI - 2cc." },
    { id: "med-intaglobin", nombre: "Intaglobin (Inmunoglobulina)", categoria: "Otros", concMg: 500, concMl: 100, dosisMin: 100, dosisMaxKg: 400, tipoDosis: "dosis", dosisMaxAbs: 400, frecuencia: "dosis única", notas: "Frascos 0.5g, 2.5g, 5g en 100cc." },
    { id: "med-eritropoyetina", nombre: "Eritropoyetina Recombinante", categoria: "Otros", concMg: 2000, concMl: 1, dosisMin: 25, dosisMaxKg: 50, tipoDosis: "dosis", dosisMaxAbs: 100, frecuencia: "3 veces a la semana (IRC)", notas: "Bbo 2.000 UI y 4.000 UI." },
    { id: "med-gamaglobulina", nombre: "Gamaglobulina al 10%", categoria: "Otros", concMg: 200, concMl: 2, dosisMin: 0.2, dosisMaxKg: 0.2, tipoDosis: "dosis", dosisMaxAbs: 80, frecuencia: "dosis única / repetición", notas: "Bbo 200mg-2cc." }
];

// Clave de almacenamiento en localStorage (actualizada para sincronizar el vademécum ampliado)
const STORAGE_KEY = 'dosispedia_v5_meds';

// ==========================================
// 2. ESTADO GLOBAL
// ==========================================
let meds = [];
let selectedCategory = "Todas";
let searchQuery = "";
let currentWeight = null;
let severityPercent = 50;
let expandedCardId = null;

// ==========================================
// 3. REFERENCIAS AL DOM
// ==========================================
let inputPeso;
let inputSearch;
let btnClearSearch;
let categoryContainer;
let medsList;
let txtContadorResultados;
let themeToggle;
let sliderSeveridad;
let txtPresetSeveridad;
let btnResetDB;

let modalMed;
let formMed;
let btnOpenAddModal;
let btnCloseModal;
let btnDeleteMed;
let modalTitle;

let modalPWA;
let btnPWAHelp;
let btnClosePWAModal;
let btnClosePWAConfirm;

// ==========================================
// 4. INICIALIZACIÓN
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Vincular elementos del DOM
    inputPeso = document.getElementById('inputPeso');
    inputSearch = document.getElementById('inputSearch');
    btnClearSearch = document.getElementById('btnClearSearch');
    categoryContainer = document.getElementById('categoryContainer');
    medsList = document.getElementById('medsList');
    txtContadorResultados = document.getElementById('txtContadorResultados');
    themeToggle = document.getElementById('themeToggle');
    sliderSeveridad = document.getElementById('sliderSeveridad');
    txtPresetSeveridad = document.getElementById('txtPresetSeveridad');
    btnResetDB = document.getElementById('btnResetDB');

    modalMed = document.getElementById('modalMed');
    formMed = document.getElementById('formMed');
    btnOpenAddModal = document.getElementById('btnOpenAddModal');
    btnCloseModal = document.getElementById('btnCloseModal');
    btnDeleteMed = document.getElementById('btnDeleteMed');
    modalTitle = document.getElementById('modalTitle');

    modalPWA = document.getElementById('modalPWA');
    btnPWAHelp = document.getElementById('btnPWAHelp');
    btnClosePWAModal = document.getElementById('btnClosePWAModal');
    btnClosePWAConfirm = document.getElementById('btnClosePWAConfirm');

    // Inicializar estado y vistas
    loadTheme();
    loadMeds();
    renderCategories();
    renderMeds();
    if (window.lucide) {
        lucide.createIcons();
    }

    // Configurar Event Listeners
    if (inputPeso) {
        inputPeso.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value);
            currentWeight = (isNaN(val) || val <= 0) ? null : val;
            updatePesoBadge();
            renderMeds();
        });
    }

    if (inputSearch) {
        inputSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            if (btnClearSearch) {
                btnClearSearch.classList.toggle('hidden', searchQuery === '');
            }
            renderMeds();
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener('click', () => {
            if (inputSearch) inputSearch.value = '';
            searchQuery = '';
            btnClearSearch.classList.add('hidden');
            renderMeds();
        });
    }

    if (sliderSeveridad) {
        sliderSeveridad.addEventListener('input', (e) => {
            severityPercent = parseInt(e.target.value);
            updateSeverityUI();
            renderMeds();
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (btnResetDB) {
        btnResetDB.addEventListener('click', resetToDefaultDB);
    }

    if (btnOpenAddModal) {
        btnOpenAddModal.addEventListener('click', () => openMedModal());
    }

    if (btnCloseModal) {
        btnCloseModal.addEventListener('click', closeMedModal);
    }

    if (formMed) {
        formMed.addEventListener('submit', handleSaveMed);
    }

    if (btnDeleteMed) {
        btnDeleteMed.addEventListener('click', handleDeleteMed);
    }

    if (btnPWAHelp && modalPWA) {
        btnPWAHelp.addEventListener('click', () => modalPWA.classList.remove('hidden'));
    }

    if (btnClosePWAModal && modalPWA) {
        btnClosePWAModal.addEventListener('click', () => modalPWA.classList.add('hidden'));
    }

    if (btnClosePWAConfirm && modalPWA) {
        btnClosePWAConfirm.addEventListener('click', () => modalPWA.classList.add('hidden'));
    }
});

// ==========================================
// 5. GESTIÓN DE ALMACENAMIENTO (LOCALSTORAGE)
// ==========================================
function loadMeds() {
    const savedV5 = localStorage.getItem(STORAGE_KEY);
    const savedV4 = localStorage.getItem('dosispedia_v4_meds');
    const savedV3 = localStorage.getItem('dosispedia_v3_meds');
    
    let loaded = null;
    if (savedV5) {
        try { 
            loaded = JSON.parse(savedV5); 
        } catch (e) { 
            loaded = null; 
        }
    } else if (savedV4) {
        try { 
            loaded = JSON.parse(savedV4); 
        } catch (e) { 
            loaded = null; 
        }
    } else if (savedV3) {
        try { 
            loaded = JSON.parse(savedV3); 
        } catch (e) { 
            loaded = null; 
        }
    }

    if (loaded && Array.isArray(loaded)) {
        // Mapa para garantizar unicidad estricta (si hay repetidos, queda 1 solo)
        const medMap = new Map();
        
        // 1. Cargar medicamentos predeterminados oficiales con las actualizaciones más recientes
        DEFAULT_MEDICATIONS.forEach(med => {
            medMap.set(med.id, { ...med });
        });

        // 2. Si el usuario guardó medicamentos personalizados que no existen en el vademécum base, conservarlos
        loaded.forEach(m => {
            if (m && m.id && !medMap.has(m.id)) {
                medMap.set(m.id, m);
            }
        });

        meds = Array.from(medMap.values());
    } else {
        meds = [...DEFAULT_MEDICATIONS];
    }

    saveMedsToStorage();
}

function saveMedsToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meds));
}

function resetToDefaultDB() {
    if (confirm("¿Deseas restablecer el vademécum con la lista completa predeterminada?")) {
        meds = [...DEFAULT_MEDICATIONS];
        saveMedsToStorage();
        renderCategories();
        renderMeds();
    }
}

// ==========================================
// 6. GESTIÓN DE TEMA (MODO OSCURO / CLARO)
// ==========================================
function loadTheme() {
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// ==========================================
// 7. CÁLCULOS, SEVERIDAD Y FILTROS
// ==========================================
function setPresetSeverity(val) {
    severityPercent = val;
    if (sliderSeveridad) {
        sliderSeveridad.value = val;
    }
    updateSeverityUI();
    renderMeds();
}

function updateSeverityUI() {
    const btnMin = document.getElementById('btnPresetMin');
    const btnMed = document.getElementById('btnPresetMed');
    const btnMax = document.getElementById('btnPresetMax');

    [btnMin, btnMed, btnMax].forEach(b => {
        if (b) {
            b.className = "py-1 text-xs font-bold rounded-lg transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900";
        }
    });

    if (!txtPresetSeveridad) return;

    if (severityPercent <= 20) {
        txtPresetSeveridad.textContent = "Dosis Mínima";
        if (btnMin) btnMin.className = "py-1 text-xs font-bold rounded-lg transition-all bg-white dark:bg-slate-800 text-medical-800 dark:text-medical-300 shadow";
    } else if (severityPercent >= 80) {
        txtPresetSeveridad.textContent = "Dosis Máxima";
        if (btnMax) btnMax.className = "py-1 text-xs font-bold rounded-lg transition-all bg-white dark:bg-slate-800 text-medical-800 dark:text-medical-300 shadow";
    } else {
        txtPresetSeveridad.textContent = `Estándar (${severityPercent}%)`;
        if (btnMed) btnMed.className = "py-1 text-xs font-bold rounded-lg transition-all bg-white dark:bg-slate-800 text-medical-800 dark:text-medical-300 shadow";
    }
}

function updatePesoBadge() {
    const badge = document.getElementById('badgeEstadoPeso');
    if (!badge) return;

    if (currentWeight) {
        badge.textContent = `${currentWeight} kg activo`;
        badge.className = "text-xs bg-emerald-500/30 text-emerald-100 backdrop-blur-sm px-2 py-0.5 rounded-full font-semibold border border-emerald-400/30";
    } else {
        badge.textContent = "Ingrese peso";
        badge.className = "text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full font-medium";
    }
}

function renderCategories() {
    if (!categoryContainer) return;
    
    // Obtener categorías únicas presentes en la base de datos de medicamentos de forma dinámica
    const uniqueCategories = Array.from(new Set(meds.map(m => m.categoria).filter(Boolean))).sort();
    const categories = ["Todas", ...uniqueCategories];

    if (!categories.includes(selectedCategory)) {
        selectedCategory = "Todas";
    }
    
    categoryContainer.innerHTML = categories.map(cat => {
        const isActive = cat === selectedCategory;
        return `
            <button onclick="selectCategory('${cat}')" 
                class="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                    isActive 
                    ? 'bg-medical-600 text-white shadow-sm' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }">
                ${cat}
            </button>
        `;
    }).join('');
}

function selectCategory(cat) {
    selectedCategory = cat;
    renderCategories();
    renderMeds();
}

// ==========================================
// 8. RENDERIZADO DE MEDICAMENTOS Y TARJETAS
// ==========================================
function renderMeds() {
    if (!medsList) return;

    const filtered = meds.filter(m => {
        const matchesCat = (selectedCategory === "Todas" || m.categoria === selectedCategory);
        const matchesSearch = m.nombre.toLowerCase().includes(searchQuery) || m.categoria.toLowerCase().includes(searchQuery);
        return matchesCat && matchesSearch;
    });

    if (txtContadorResultados) {
        txtContadorResultados.textContent = `${filtered.length} medicamento(s)`;
    }

    if (filtered.length === 0) {
        medsList.innerHTML = `
            <div class="text-center py-10 px-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 col-span-full">
                <i data-lucide="search-x" class="w-10 h-10 mx-auto text-slate-400 mb-2"></i>
                <p class="font-bold text-slate-700 dark:text-slate-200">Sin fármacos encontrados</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    medsList.innerHTML = filtered.map(m => createMedCardHTML(m)).join('');
    if (window.lucide) lucide.createIcons();
}

function toggleCardExpand(id) {
    expandedCardId = expandedCardId === id ? null : id;
    renderMeds();
}

function createMedCardHTML(m) {
    const isExpanded = expandedCardId === m.id;
    let calculationBox = '';

    if (currentWeight) {
        const dosisMinMgKg = m.dosisMin;
        const dosisMaxMgKg = m.dosisMaxKg;

        const mgMinCalculado = currentWeight * dosisMinMgKg;
        const mgMaxCalculado = currentWeight * dosisMaxMgKg;

        const ratio = severityPercent / 100;
        let mgSeleccionado = mgMinCalculado + (mgMaxCalculado - mgMinCalculado) * ratio;

        let isExceededAbs = false;
        if (m.dosisMaxAbs && mgSeleccionado > m.dosisMaxAbs) {
            mgSeleccionado = m.dosisMaxAbs;
            isExceededAbs = true;
        }

        const ccMin = (mgMinCalculado * m.concMl) / m.concMg;
        const ccMax = (mgMaxCalculado * m.concMl) / m.concMg;
        const ccSeleccionado = (mgSeleccionado * m.concMl) / m.concMg;

        const labelUnidad = m.tipoDosis === 'dia' ? 'mg/día' : 'mg/toma';

        calculationBox = `
            <div class="mt-3 p-3 rounded-xl border transition-all ${
                isExceededAbs 
                ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800' 
                : 'bg-medical-50 dark:bg-slate-900/80 border-medical-200 dark:border-slate-700/80'
            }">
                <div class="flex items-center justify-between border-b pb-2 dark:border-slate-700/60">
                    <div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                            Dosis Seleccionada (${m.frecuencia})
                        </span>
                        <div class="flex items-baseline gap-1.5 mt-0.5">
                            <span class="text-2xl font-black ${isExceededAbs ? 'text-red-600 dark:text-red-400' : 'text-medical-700 dark:text-medical-400'}">
                                ${ccSeleccionado.toFixed(2)} <span class="text-sm font-bold">ml (cc)</span>
                            </span>
                            <span class="text-xs font-semibold text-slate-600 dark:text-slate-300">
                                (${mgSeleccionado.toFixed(1)} ${labelUnidad})
                            </span>
                        </div>
                    </div>

                    <span class="text-xs font-bold px-2 py-1 rounded-md ${
                        isExceededAbs 
                        ? 'bg-red-200 text-red-800' 
                        : 'bg-medical-100 dark:bg-slate-800 text-medical-800 dark:text-medical-300'
                    }">
                        ${severityPercent <= 20 ? 'Min' : severityPercent >= 80 ? 'Max' : 'Estándar'}
                    </span>
                </div>

                <div class="grid grid-cols-2 gap-2 pt-2 text-xs">
                    <div class="bg-white/80 dark:bg-slate-800/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block uppercase font-bold">Dosis Mínima</span>
                        <b class="text-slate-800 dark:text-slate-200 text-sm">${ccMin.toFixed(2)} ml</b>
                        <span class="text-[10px] text-slate-500 block">(${mgMinCalculado.toFixed(1)} ${labelUnidad})</span>
                    </div>
                    <div class="bg-white/80 dark:bg-slate-800/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block uppercase font-bold">Dosis Máxima</span>
                        <b class="text-slate-800 dark:text-slate-200 text-sm">${ccMax.toFixed(2)} ml</b>
                        <span class="text-[10px] text-slate-500 block">(${mgMaxCalculado.toFixed(1)} ${labelUnidad})</span>
                    </div>
                </div>

                ${isExceededAbs ? `
                    <div class="mt-2 text-xs bg-red-500/10 text-red-700 dark:text-red-400 p-2 rounded-lg flex items-center gap-1.5 font-medium border border-red-500/20">
                        <i data-lucide="alert-octagon" class="w-4 h-4 flex-shrink-0 text-red-600"></i>
                        <span><b>ALERTA DE SEGURIDAD:</b> Alcanzado tope máximo absoluto permitido (${m.dosisMaxAbs} mg).</span>
                    </div>
                ` : ''}
            </div>
        `;
    } else {
        calculationBox = `
            <div class="mt-3 p-2.5 bg-slate-100 dark:bg-slate-900/40 rounded-xl text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                <i data-lucide="calculator" class="w-4 h-4"></i>
                Ingresa el peso en la parte superior para calcular las dosis.
            </div>
        `;
    }

    return `
        <article class="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between">
                <div>
                    <span class="inline-block text-[10px] font-bold tracking-wider uppercase bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md mb-1">
                        ${m.categoria}
                    </span>
                    <h2 class="font-bold text-slate-900 dark:text-white text-base leading-snug">
                        ${m.nombre}
                    </h2>
                </div>
                <div class="flex items-center gap-1">
                    <button onclick="openMedModal('${m.id}')" title="Editar Fármaco" class="p-1.5 text-slate-400 hover:text-medical-600 dark:hover:text-medical-400 transition-colors">
                        <i data-lucide="edit-3" class="w-4 h-4"></i>
                    </button>
                    <button onclick="toggleCardExpand('${m.id}')" class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                        <i data-lucide="${isExpanded ? 'chevron-up' : 'chevron-down'}" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>

            <div class="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-700/50 pt-2">
                <div>
                    <span class="text-slate-400 block text-[10px] uppercase font-bold">Presentación:</span>
                    <b class="font-semibold">${m.concMg} mg / ${m.concMl} ml</b>
                </div>
                <div>
                    <span class="text-slate-400 block text-[10px] uppercase font-bold">Rango Dosis:</span>
                    <b class="font-semibold">${m.dosisMin} - ${m.dosisMaxKg} mg/kg</b>
                </div>
            </div>

            ${calculationBox}

            ${isExpanded ? `
                <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 text-xs space-y-1.5">
                    <div class="flex justify-between">
                        <span class="text-slate-400">Frecuencia habitual:</span>
                        <span class="font-medium text-slate-700 dark:text-slate-200">${m.frecuencia}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Tipo de Dosis:</span>
                        <span class="font-medium text-slate-700 dark:text-slate-200">${m.tipoDosis === 'dia' ? 'mg / kg / día' : 'mg / kg / dosis'}</span>
                    </div>
                    ${m.dosisMaxAbs ? `
                        <div class="flex justify-between">
                            <span class="text-slate-400">Dosis Máxima Absoluta:</span>
                            <span class="font-medium text-amber-600 dark:text-amber-400">${m.dosisMaxAbs} mg</span>
                        </div>
                    ` : ''}
                </div>
            ` : ''}

            ${m.notas ? `
                <p class="mt-2 text-[11px] text-slate-500 dark:text-slate-400 italic flex items-start gap-1">
                    <i data-lucide="info" class="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-slate-400"></i>
                    <span>${m.notas}</span>
                </p>
            ` : ''}
        </article>
    `;
}

// ==========================================
// 9. MODAL Y CRUD DE MEDICAMENTOS
// ==========================================
function openMedModal(id = null) {
    if (!formMed || !modalMed) return;
    formMed.reset();

    if (id) {
        const med = meds.find(m => m.id === id);
        if (!med) return;
        
        if (modalTitle) modalTitle.textContent = "Editar Medicamento";
        document.getElementById('medId').value = med.id;
        document.getElementById('medNombre').value = med.nombre;
        document.getElementById('medCategoria').value = med.categoria;
        document.getElementById('medFrecuencia').value = med.frecuencia;
        document.getElementById('medConcMg').value = med.concMg;
        document.getElementById('medConcMl').value = med.concMl;
        document.getElementById('medDosisMin').value = med.dosisMin;
        document.getElementById('medDosisMaxKg').value = med.dosisMaxKg;
        document.getElementById('medTipoDosis').value = med.tipoDosis || 'dosis';
        document.getElementById('medDosisMaxAbs').value = med.dosisMaxAbs || '';
        document.getElementById('medNotas').value = med.notas || '';

        if (btnDeleteMed) btnDeleteMed.classList.remove('hidden');
    } else {
        if (modalTitle) modalTitle.textContent = "Nuevo Medicamento";
        document.getElementById('medId').value = "";
        if (btnDeleteMed) btnDeleteMed.classList.add('hidden');
    }

    modalMed.classList.remove('hidden');
}

function closeMedModal() {
    if (modalMed) {
        modalMed.classList.add('hidden');
    }
}

function handleSaveMed(e) {
    e.preventDefault();
    
    const id = document.getElementById('medId').value;
    const newMed = {
        id: id || "med-" + Date.now(),
        nombre: document.getElementById('medNombre').value.trim(),
        categoria: document.getElementById('medCategoria').value,
        frecuencia: document.getElementById('medFrecuencia').value.trim(),
        concMg: parseFloat(document.getElementById('medConcMg').value),
        concMl: parseFloat(document.getElementById('medConcMl').value),
        dosisMin: parseFloat(document.getElementById('medDosisMin').value),
        dosisMaxKg: parseFloat(document.getElementById('medDosisMaxKg').value),
        tipoDosis: document.getElementById('medTipoDosis').value,
        dosisMaxAbs: document.getElementById('medDosisMaxAbs').value ? parseFloat(document.getElementById('medDosisMaxAbs').value) : null,
        notas: document.getElementById('medNotas').value.trim()
    };

    if (id) {
        meds = meds.map(m => m.id === id ? newMed : m);
    } else {
        meds.unshift(newMed);
    }

    saveMedsToStorage();
    closeMedModal();
    renderCategories();
    renderMeds();
}

function handleDeleteMed() {
    const id = document.getElementById('medId').value;
    if (!id) return;

    if (confirm("¿Estás seguro de que deseas eliminar este medicamento?")) {
        meds = meds.filter(m => m.id !== id);
        saveMedsToStorage();
        closeMedModal();
        renderCategories();
        renderMeds();
    }
}

// ==========================================
// 10. EXPONER FUNCIONES GLOBALES AL WINDOW
// ==========================================
window.setPresetSeverity = setPresetSeverity;
window.selectCategory = selectCategory;
window.toggleCardExpand = toggleCardExpand;
window.openMedModal = openMedModal;
window.closeMedModal = closeMedModal;
