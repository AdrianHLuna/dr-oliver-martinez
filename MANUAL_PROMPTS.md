# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Oliver Martínez González — Neumología
**Ciudad:** Hermosillo, Sonora (Hospital San José, 4to piso, módulo O, consultorio 409)
**Especialidad:** Neumología (enfermedades y estudios del sistema respiratorio)

**Nota de discreción clínica:** la neumología trata anatomía torácica y pulmonar, sin contenido sensible como en otras especialidades. Aun así, cada prompt está redactado para representar **visualmente el tema real que describe** — nunca una escena genérica de "doctor con tablet" desconectada del padecimiento, estudio o síntoma específico (ese fue un error real detectado y corregido en el manual de otro sitio del repositorio). Cada imagen combina, según el caso, ilustración anatómica 3D de corte médico o fotografía clínica de alta gama, siempre con la paleta oficial de marca.

Cada prompt indica entre paréntesis la ruta de archivo exacta a la que corresponde en el sitio (`public/...jpg`), tomada directamente del campo `image` de `src/data/diseases.ts`, `services.ts` y `symptoms.ts` — coloca el archivo generado exactamente en esa ruta dentro de `public/`.

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de neumología de alta gama.
Tono: Preciso, sereno y de autoridad clínica (Neumología — enfermedades y estudios respiratorios), luminoso y "respirable" — nunca oscuro, alarmante ni clínico-frío en exceso.
Estilo: Para enfermedades, ilustración anatómica 3D de corte médico (pulmón, vía aérea, pleura) tipo libro de texto premium; para servicios/estudios, fotografía clínica de alta gama de equipo real y procedimiento; para síntomas, fotografía discreta de una persona en un momento cotidiano que sugiere el síntoma, sin dramatismo excesivo ni gestos de dolor exagerados.
Restricciones: Sin sangre explícita ni contenido gráfico desagradable (aun en hemoptisis, sugerir sin mostrar fluido rojo intenso). Todo debe lucir estéril, luminoso y de alta tecnología. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright, airy medical studio lighting, soft shadows, luminous atmosphere ("respirable").
- Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Pale Sky Blue (#92CEE9), Steel Blue (#3877A5), Teal Accent (#3F8F84), Soft Mist Gray-Blue (#D3E0E9), Clinical White.
- Composition: Symmetrical, calm, spacious framing with generous negative space (matches a light, airy "Respiración" brand feel).
- Suffixes: realistic medical CGI or high-fidelity clinical photography as indicated per prompt, 8k, photorealistic textures, unreal engine 5 style (for 3D) --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature, excessive blood, graphic content, dark or gloomy lighting.
```

---

## 🫁 SECCIÓN 1: PROMPTS PARA ENFERMEDADES RESPIRATORIAS

### 1. Asma (`public/enfermedades/asma.jpg`)
```text
Aesthetic 3D anatomical illustration of the human bronchial tree showing mild airway constriction and inflamed bronchial walls, clean educational cross-section highlighting the narrowed airway in soft glowing blue, clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Symmetrical focused clinical cross-section of the bronchial airway.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 2. Enfermedad Pulmonar Obstructiva Crónica — EPOC (`public/enfermedades/epoc.jpg`)
```text
3D anatomical cross-section illustration comparing a healthy lung lobe with an obstructed, damaged lung lobe showing narrowed airways and trapped air pockets, side-by-side educational medical diagram, clean clinical textbook style.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Split symmetrical comparison view, healthy versus affected lung tissue.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 3. Neumonía (`public/enfermedades/neumonia.jpg`)
```text
3D anatomical illustration of a lung lobe with alveoli clusters filled with inflammatory fluid, highlighting the infected region in warm contrast against healthy translucent tissue, clean educational cross-section, clinical textbook illustration.

Lighting: Bright clean laboratory lighting with a soft warm accent on the infected zone.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Teal Accent (#3F8F84), Clinical White.
Composition: Close-up cross-section of alveolar clusters.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 4. Bronquitis Crónica (`public/enfermedades/bronquitis-cronica.jpg`)
```text
3D anatomical cross-section of a bronchial tube showing thickened, inflamed mucous lining with excess mucus buildup along the airway walls, clean educational medical illustration, clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Soft Mist Gray-Blue (#D3E0E9), Clinical White.
Composition: Longitudinal cross-section of the bronchial tube.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 5. Apnea Obstructiva del Sueño (`public/enfermedades/apnea-obstructiva-del-sueno.jpg`)
```text
Photorealistic clinical photo of a peaceful bedroom at night showing a serene sleeping adult from a discreet side angle, with a subtle soft blue glow illustrating the airflow path from nose to throat overlaid gently, calm and non-alarming atmosphere.

Lighting: Soft cool nightlight ambiance with a gentle blue accent glow.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Soft Mist Gray-Blue (#D3E0E9).
Composition: Medium shot, discreet side angle of a sleeping figure, calm bedroom setting.
Suffixes: high-fidelity clinical photography, soft focus, 8k --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, distressed expression, dark or gloomy lighting.
```

### 6. Fibrosis Pulmonar (`public/enfermedades/fibrosis-pulmonar.jpg`)
```text
3D anatomical illustration of lung tissue showing progressive scarring and thickened fibrous bands replacing healthy elastic alveolar tissue, textured contrast between scarred and healthy zones, clean educational cross-section, clinical textbook style.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Close-up cross-section contrasting scarred versus healthy lung tissue.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 7. Tuberculosis Pulmonar (`public/enfermedades/tuberculosis-pulmonar.jpg`)
```text
3D anatomical cross-section illustration of an upper lung lobe showing small granuloma nodules within the tissue, sterile educational medical diagram with clear anatomical labeIing style but without any text, clinical textbook illustration.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Clinical White, Soft Mist Gray-Blue (#D3E0E9).
Composition: Close-up cross-section of the upper lung lobe.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 8. Enfisema Pulmonar (`public/enfermedades/enfisema-pulmonar.jpg`)
```text
3D anatomical illustration of over-inflated, enlarged alveolar sacs with broken and merged air pocket walls compared to normal compact alveoli, clean educational cross-section, clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting, soft shadows.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Close-up symmetrical comparison of alveolar clusters.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 9. Derrame Pleural (`public/enfermedades/derrame-pleural.jpg`)
```text
3D anatomical cross-section illustration of the thoracic cavity showing fluid accumulation in the pleural space compressing the lung tissue, clean educational medical diagram with a subtle blue-tinted fluid layer, clinical textbook illustration.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Teal Accent (#3F8F84), Clinical White.
Composition: Coronal cross-section of the thoracic cavity and pleural space.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 10. Cáncer de Pulmón (`public/enfermedades/cancer-de-pulmon.jpg`)
```text
3D anatomical illustration of a lung lobe showing a small, focal abnormal tissue mass within the bronchial pathway, sterile organic tissue style, clinical oncology textbook illustration, non-alarming educational tone.

Lighting: Focused clinical spotlighting on the lung lobe.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Close-up sagittal view of the lung lobe and bronchial pathway.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

---

## 🩺 SECCIÓN 2: PROMPTS PARA SERVICIOS Y ESTUDIOS DE NEUMOLOGÍA

### 1. Espirometría (`public/servicios/espirometria.jpg`)
```text
Clinical photorealistic photo of a patient exhaling firmly into a spirometer mouthpiece connected to a modern digital lung function monitor displaying a flow-volume curve, calm outpatient clinic setting, medical staff observing.

Lighting: Clean, bright luxury medical studio lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Clinical White, Steel Blue (#3877A5).
Composition: Medium shot, patient and spirometer device in focus.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 2. Broncoscopía (`public/servicios/broncoscopia.jpg`)
```text
Clinical photorealistic photo of a pulmonologist guiding a thin flexible bronchoscope during a procedure, high-definition airway monitor displaying the bronchial view in the background, modern outpatient procedure room.

Lighting: Bright clean clinical facility lighting.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Clinical White, Brand Vivid Sky Blue (#4A9FDC).
Composition: Medium shot of the physician and the diagnostic monitor.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 3. Polisomnografía — Estudio del Sueño (`public/servicios/polisomnografia-estudio-del-sueno.jpg`)
```text
Clinical photorealistic photo of a sleep study room at a clinic showing a comfortable bed with discreet sleep-monitoring sensor leads resting nearby, a small bedside monitor displaying calm waveform lines, warm and reassuring atmosphere, no patient visible.

Lighting: Soft warm ambient clinic lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Soft Mist Gray-Blue (#D3E0E9), Clinical White.
Composition: Wide shot of the sleep study room setup.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark or gloomy lighting.
```

### 4. Gasometría Arterial (`public/servicios/gasometria-arterial.jpg`)
```text
Clinical photorealistic close-up photo of a healthcare professional's gloved hands preparing a small arterial blood sample syringe on a clean medical tray, modern laboratory clinic setting, precise and sterile atmosphere.

Lighting: Bright clean laboratory lighting.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Clinical White, Brand Vivid Sky Blue (#4A9FDC).
Composition: Close-up on hands and sample tray.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, excessive blood, neon, dark lighting.
```

### 5. Prueba de Caminata de 6 Minutos (`public/servicios/prueba-de-caminata-de-6-minutos.jpg`)
```text
Clinical photorealistic photo of an adult patient walking at a steady pace along a marked hospital corridor with a pulse oximeter clipped to a finger, a healthcare professional with a stopwatch and clipboard walking alongside, bright modern clinic hallway.

Lighting: Bright natural daylight through hallway windows.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Clinical White, Teal Accent (#3F8F84).
Composition: Wide shot following the walking patient down the corridor.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 6. Oxigenoterapia (`public/servicios/oxigenoterapia.jpg`)
```text
Clinical photorealistic photo of a modern portable oxygen concentrator device with a nasal cannula neatly arranged beside it on a clean home setting table, bright and calm domestic atmosphere, no patient visible.

Lighting: Soft bright natural daylight.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Clinical White, Soft Mist Gray-Blue (#D3E0E9).
Composition: Medium shot of the oxygen device and cannula.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic toy look, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 7. Rehabilitación Pulmonar (`public/servicios/rehabilitacion-pulmonar.jpg`)
```text
Clinical photorealistic photo of an older adult performing supervised light breathing and stretching exercises on a stationary bike in a bright pulmonary rehabilitation gym, a physical therapist guiding nearby, encouraging and energetic atmosphere.

Lighting: Bright natural daylight through large gym windows.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Teal Accent (#3F8F84), Clinical White.
Composition: Medium wide shot of the exercise session.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 8. Toracocentesis (`public/servicios/toracocentesis.jpg`)
```text
3D medical illustration of a fine needle guided by ultrasound approaching the pleural space of the chest wall from an external schematic angle, sterile anatomical device-and-procedure diagram, non-explicit educational style.

Lighting: Clean studio spotlighting with soft blue accents.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Clinical White, Steel Blue (#3877A5).
Composition: Schematic external view of the chest wall and needle guidance path.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, HUD, dark lighting.
```

### 9. Biopsia Pulmonar (`public/servicios/biopsia-pulmonar.jpg`)
```text
Clinical photorealistic photo of a radiologist and pulmonologist reviewing a chest imaging scan together on a bright diagnostic monitor showing a highlighted lung region, modern imaging suite, calm and focused atmosphere.

Lighting: Bright clean clinical facility lighting.
Color Palette: Brand Deep Navy (#15234A), Steel Blue (#3877A5), Clinical White, Brand Vivid Sky Blue (#4A9FDC).
Composition: Medium shot of the physicians and the imaging monitor.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, dark lighting.
```

### 10. Adaptación de Ventilación No Invasiva — CPAP/BiPAP (`public/servicios/adaptacion-de-ventilacion-no-invasiva-cpap-bipap.jpg`)
```text
Clinical photorealistic photo of a modern CPAP machine with a soft-profile mask resting on a nightstand beside a neatly made bed, warm calm bedroom atmosphere, no patient visible, device shown as the clear focus.

Lighting: Soft warm bedside lamp lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Soft Mist Gray-Blue (#D3E0E9), Clinical White.
Composition: Medium close-up of the CPAP device and mask on the nightstand.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic toy look, CGI, 3D render, text, watermark, blood, neon, dark or gloomy lighting.
```

---

## 🌬️ SECCIÓN 3: PROMPTS PARA SÍNTOMAS RESPIRATORIOS

### 1. Tos Crónica (`public/sintomas/tos-cronica.jpg`)
```text
Photorealistic photo of an adult sitting on a couch at home covering their mouth mid-cough with a tissue, mild persistent discomfort in expression, calm and softly lit living room setting.

Lighting: Soft natural indoor daylight.
Color Palette: Brand Deep Navy (#15234A) clothing, Brand Vivid Sky Blue (#4A9FDC) accents, Neutral Gray.
Composition: Medium shot, seated figure in a home living room.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, dark lighting.
```

### 2. Dificultad para Respirar / Disnea (`public/sintomas/dificultad-para-respirar-disnea.jpg`)
```text
Photorealistic photo of an adult pausing midway up a staircase, one hand resting on the railing and the other on their chest, catching their breath with a mild strained expression, bright indoor stairwell setting.

Lighting: Bright natural daylight from a nearby window.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC) accents, Clinical White.
Composition: Medium shot on the staircase, figure paused mid-climb.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, dark lighting.
```

### 3. Sibilancias / Silbido al Respirar (`public/sintomas/sibilancias-silbido-al-respirar.jpg`)
```text
3D anatomical illustration of a narrowed bronchial airway with turbulent airflow lines passing through the constricted passage, subtle glowing blue airflow visualization, clean educational medical diagram, clinical textbook style.

Lighting: Clean, bright luxury medical studio lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC), Pale Sky Blue (#92CEE9), Clinical White.
Composition: Close-up cross-section of the narrowed airway with airflow lines.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, dark lighting.
```

### 4. Dolor Torácico al Respirar (`public/sintomas/dolor-toracico-al-respirar.jpg`)
```text
Photorealistic photo of an adult sitting upright in a chair with one hand pressed gently against the side of their chest, a subtle wince of discomfort while taking a breath, bright calm indoor setting.

Lighting: Soft bright indoor daylight.
Color Palette: Brand Deep Navy (#15234A) clothing, Brand Vivid Sky Blue (#4A9FDC) accents, Clinical White.
Composition: Medium shot, seated figure with hand on chest.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, dark lighting.
```

### 5. Tos con Sangre / Hemoptisis (`public/sintomas/tos-con-sangre-hemoptisis.jpg`)
```text
Photorealistic photo of a concerned adult sitting at the edge of a bed, looking at a tissue in their hand with a worried expression, discreet framing that does not show any fluid or blood detail, calm bedroom setting implying a moment of concern.

Lighting: Soft warm morning daylight.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC) accents, Warm Beige.
Composition: Medium shot, seated figure looking at a tissue in hand, no visible fluid.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, visible blood, graphic content, dark lighting.
```

### 6. Ronquido Fuerte y Pausas Respiratorias al Dormir (`public/sintomas/ronquido-fuerte-y-pausas-respiratorias-al-dormir.jpg`)
```text
Photorealistic photo of a partner sitting up in bed at night looking with mild concern toward a sleeping person beside them, soft bedside lamp light, quiet and discreet bedroom atmosphere implying a pause in breathing was just noticed.

Lighting: Soft warm bedside lamp lighting, night atmosphere.
Color Palette: Brand Deep Navy (#15234A) bed linens, Brand Vivid Sky Blue (#4A9FDC) accents, Cream.
Composition: Medium shot centered on both figures in bed, discreet framing.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, dark or gloomy lighting.
```

### 7. Fatiga y Cansancio Excesivo (`public/sintomas/fatiga-y-cansancio-excesivo.jpg`)
```text
Photorealistic photo of an adult resting their head on their hand at a home desk in the middle of the day, eyes half-closed with visible exhaustion, a cup of tea nearby, bright but calm daytime setting.

Lighting: Soft bright daytime indoor lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC) accents, Warm Neutral.
Composition: Medium close-up, seated figure resting head on hand.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, dark lighting.
```

### 8. Opresión en el Pecho (`public/sintomas/opresion-en-el-pecho.jpg`)
```text
Photorealistic photo of an adult standing by a bright window taking a slow deliberate breath with both hands resting flat on their chest, calm but focused expression, airy indoor setting with soft natural light.

Lighting: Bright soft natural window light.
Color Palette: Brand Deep Navy (#15234A) clothing, Brand Vivid Sky Blue (#4A9FDC) accents, Clinical White.
Composition: Medium shot, standing figure by a window with hands on chest.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, dark lighting.
```

### 9. Producción Excesiva de Flema (`public/sintomas/produccion-excesiva-de-flema.jpg`)
```text
Photorealistic photo of an adult in a bright bathroom pausing while brushing their teeth, gently clearing their throat with a tissue in hand, calm and discreet morning routine framing from the shoulders up.

Lighting: Bright clean bathroom lighting.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC) towel accent, Clinical White.
Composition: Medium shot from the shoulders up, discreet framing.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, graphic content, dark lighting.
```

### 10. Pérdida de Peso Inexplicable con Síntomas Respiratorios (`public/sintomas/perdida-de-peso-inexplicable-con-sintomas-respiratorios.jpg`)
```text
Photorealistic photo of an adult looking thoughtfully at a slightly loose-fitting shirt in front of a bedroom mirror, subtle concerned expression, bright calm bedroom setting implying noticing unintended weight change.

Lighting: Soft bright natural daylight.
Color Palette: Brand Deep Navy (#15234A), Brand Vivid Sky Blue (#4A9FDC) accents, Warm Neutral.
Composition: Medium shot at the mirror, figure adjusting their shirt.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, dark lighting.
```

---

## 🎨 BONUS: Imagen Atmosférica del Hero (Home)

No forma parte de las 30 fichas del catálogo, pero es la imagen de fondo del Hero centrado de la página de inicio (actualmente resuelto solo con degradado CSS + círculos "que respiran" — ver `src/app/page.tsx`). Si se genera una fotografía real para reemplazar el degradado:

```text
Atmospheric wide photorealistic image of a serene sunrise sky with soft cloud layers suggesting the rhythm of breathing, extremely subtle and abstract, ample negative space at the center-bottom for text overlay, calm and expansive mood.

Lighting: Soft golden-blue dawn light.
Color Palette: Brand Deep Navy (#15234A) at the edges blending into Brand Vivid Sky Blue (#4A9FDC) and Pale Sky Blue (#92CEE9) toward the center.
Composition: Wide symmetrical sky composition with generous empty space in the lower-center third.
Suffixes: cinematic atmospheric photography, 8k, ultra wide --ar 16:9 --v 6.0
Negative Prompt: text, watermark, signature, people, buildings, dark stormy mood.
```
