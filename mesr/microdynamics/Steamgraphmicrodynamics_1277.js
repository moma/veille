var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"phosphore blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24728, 0.24767, 0.29398, 0.29378, 0.29385, 0.37647, 0.37674, 0.37633, 0.37633, 0.37523, 0.37522, 0.95223, 0.70476, 0.70433, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70292, 0.70163, 0.70146, 0.70124, 0.7006, 0.94369, 0.94339, 0.94355, 0.94382, 0.94383, 0.94447, 0.94411, 0.62112, 0.62136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94121, 0.9412, 0.95179, 0.95223, 0.95194, 0.95152, 0.95148, 0.95025, 0.95144, 0.95062, 0.95071, 0.94818, 0.94807, 0.94704, 0.94352, 0.94342, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes biologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24413, 0.2443, 0.24468, 0.2446, 0.24499, 0.24512, 0.24495, 0.32784, 0.51251, 0.59353, 0.95848, 0.95848, 0.95569, 0.95879, 0.95598, 0.95578, 0.95819, 0.957, 0.95691, 0.95661, 0.73087, 0.73096, 0.67126, 0.60258, 0.60268, 0.60217, 0.23941, 0.13592, 0.13577, 0.13575, 0.18868, 0.18863, 0.18869, 0.21779, 0.24583, 0.24575, 0.24553, 0.28188, 0.28179, 0.28184, 0.5723, 0.5723, 0.57269, 0.57247, 0.39308, 0.39324, 0.39322, 0.93547, 0.93577, 0.93613, 0.93733, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"têtes nucléaires": {
men: [0.24023, 0.23972, 0.12858, 0.12861, 0.2138, 0.21365, 0.21359, 0.11233, 0.11226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29611, 0.44308, 0.44308, 0.94383, 0.9438, 0.94788, 0.94769, 0.94712, 0.94595, 0.94586, 0.94556, 0.94577, 0.94589, 0.94643, 0.93645, 0.93661, 0.93581, 0.93684, 0.93633, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13767, 0.13771, 0.13771, 0.1378, 0.13775, 0.13775, 0.1378, 0.1926, 0.32022, 0.94318, 0.94354, 0.94475, 0.24122, 0.24128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11813, 0.11814, 0.11809, 0.11815, 0.11837, 0.1185, 0.11853, 0.11853, 0.13164, 0.13171, 0.24681, 0.2467, 0.94882, 0.9476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements militaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0.055959, 0.055923, 0.055895, 0.055906, 0.055905, 0.055945, 0.083224, 0.083195, 0.11333, 0.11339, 0.11331, 0.94449, 0.95067, 0.95136, 0.94354, 0.94354, 0.94079, 0.94076, 0.94051, 0.94032, 0.93976, 0.9386, 0.9385, 0.93821, 0.93841, 0.94705, 0.95585, 0.95528, 0.28423, 0.28399, 0.22017, 0.22005, 0.21981, 0.21979, 0.21979, 0.21974, 0.21981, 0.21941, 0.21936, 0.17402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32, 0.31959, 0.31999, 0.31971, 0.31974, 0.31889, 0.41882, 0.41836, 0.4183, 0.41826, 0.41846, 0.41852, 0.41846, 0.33908, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes chimiques": {
men: [0, 0.95963, 0.95975, 0.95993, 0.77554, 0.775, 0.7748, 0.77503, 0.62458, 0.69306, 0.58745, 0.67093, 0.6714, 0.61793, 0.61771, 0.45229, 0.45253, 0.45222, 0.30634, 0.30628, 0.3065, 0.30617, 0.27707, 0.31037, 0.25925, 0.16828, 0.13203, 0.13907, 0.1389, 0.13889, 0.13885, 0.13888, 0.18947, 0.18958, 0.15303, 0.18307, 0.21309, 0.066493, 0.069473, 0.040588, 0.056467, 0.17804, 0.17799, 0.17805, 0.17773, 0.17769, 0.17763, 0.17747, 0.23997, 0.18577, 0.1858, 0.30623, 0.9442, 0.94484, 0.94448, 0, 0, 0, 0, 0.085555, 0.085589, 0.085698, 0.085701, 0.07679, 0.076852, 0.076914, 0.076931, 0.076898, 0.076978, 0.12989, 0.41389, 0.41329, 0.41318, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traumatisme crânien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60206, 0.60187, 0.60132, 0.60146, 0.95656, 0.95672, 0.957, 0.957, 0.95765, 0.95729, 0.95728, 0.95765, 0.95761, 0.95888, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93504, 0.93476, 0.93434, 0.9343, 0.93309, 0.93426, 0.93345, 0.93355, 0.93106, 0.93096, 0.015851, 0.015849, 0.015847, 0.015855, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations militaires": {
men: [0.94195, 0.93994, 0.94006, 0.94024, 0.94021, 0.93956, 0.054322, 0.054338, 0.054303, 0.045646, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.09308, 0.22201, 0.22176, 0.22176, 0.25721, 0.2572, 0.25713, 0.44904, 0.44877, 0.95256, 0.95247, 0.95217, 0.95238, 0.9525, 0.94211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93991, 0.93968, 0.93938, 0.93852, 0.93874, 0.27245, 0.2725, 0.27258, 0.27258, 0.27276, 0.27266, 0.15568, 0.15574, 0.1059, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"effort de recherche": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.052687, 0.043043, 0.043032, 0.087755, 0.087702, 0.087594, 0.087585, 0.16679, 0.15965, 0.15967, 0.15976, 0.15967, 0.17873, 0.19612, 0.18085, 0.57325, 0.57262, 0.63309, 0.76639, 0.44331, 0.44346, 0.28937, 0.33923, 0.33913, 0.33881, 0.33889, 0.33879, 0.33884, 0.33894, 0.33894, 0.45768, 0.71401, 0.71927, 0.88936, 0.88932, 0.8905, 0.89079, 0.89114, 0.89227, 0.8923, 0.89252, 0.89324, 0.65391, 0.65405, 0.65322, 0.28565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.082876, 0.93266, 0.93278, 0.93295, 0.93293, 0.93228, 0.93204, 0.93232, 0.93171, 0, 0, 0, 0, 0, 0.32744, 0.32796, 0.32814, 0.32791, 0.328, 0.32794, 0.40871, 0.40826, 0.40826, 0.40707, 0.95536, 0.95663, 0.95643, 0.95586, 0.45255, 0.28193, 0.28184, 0.2819, 0.28194, 0.24325, 0.10566, 0.089578, 0.089502, 0.089601, 0.089552, 0, 0, 0, 0, 0, 0.12617, 0.094976, 0.094945, 0.10259, 0.10262, 0.11261, 0.17747, 0.17752, 0.17752, 0.17765, 0.17758, 0.17758, 0.17764, 0.12703, 0.070684, 0.082772, 0.082805, 0.082911, 0.082913, 0.082933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes potentielles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13849, 0.23887, 0.23873, 0.9344, 0.93431, 0.93402, 0.93422, 0.93434, 0.93488, 0.93432, 0.93448, 0.93368, 0.93471, 0.9342, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49719, 0.49665, 0.49657, 0.49652, 0.9553, 0.95544, 0.9553, 0.95575, 0.95776, 0.95863, 0.95848], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"impérialisme": {
men: [0.23877, 0.22744, 0.19706, 0.24106, 0.28932, 0.33901, 0.40205, 0.44084, 0.45782, 0.38329, 0.37117, 0.31595, 0.30118, 0.28489, 0.28192, 0.27358, 0.2749, 0.26392, 0.28893, 0.24197, 0.18952, 0.1922, 0.19685, 0.19628, 0.2055, 0.16601, 0.207, 0.18975, 0.1999, 0.18177, 0.19177, 0.18652, 0.14046, 0.13247, 0.12077, 0.10159, 0.19609, 0.18302, 0.15742, 0.17963, 0.17522, 0.16897, 0.20035, 0.21687, 0.20556, 0.19259, 0.18716, 0.20318, 0.20452, 0.22602, 0.16104, 0.15996, 0.17973, 0.14812, 0.12717, 0.2715, 0.23301, 0.22721, 0.2412, 0.29102, 0.31729, 0.34492, 0.35187, 0.32313, 0.33587, 0.34078, 0.32992, 0.30002, 0.29182, 0.08035, 0.064945, 0.061667, 0.06359, 0.059867, 0.060702, 0.0072296, 0.0079639, 0.0082946, 0.006611, 0.0061101, 0.0062628, 0.0066035, 0.0067801, 0.0057376, 0.0065822, 0.0072689, 0.0072773, 0, 0, 0, 0.019007, 0.018403, 0.023837, 0.03149, 0.025943, 0.028108, 0.02259, 0.026404, 0.024077, 0.074613, 0.07237, 0.076175, 0.080406, 0.083892, 0.10057, 0.088295, 0.086348, 0.085039, 0.13556, 0.13554], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion calamiteuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37217, 0.40176, 0.40206, 0.40162, 0.47963, 0.47823, 0.47822, 0.55434, 0.55423, 0.55389, 0.55321, 0.55316, 0.96316, 0.86088, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28236, 0.28232, 0.28243, 0.28244, 0.95012, 0.94974, 0.95024, 0.95195, 0.95305, 0.95329, 0.95327, 0.95248, 0.95293, 0.95264, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dommages collatéraux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045301, 0.13814, 0.15539, 0.24889, 0.24896, 0.45157, 0.28952, 0.2892, 0.2892, 0.28836, 0.36409, 0.364, 0.36392, 0.42445, 0.43141, 0.34081, 0.3407, 0.39104, 0.39109, 0.11491, 0.095501, 0.092148, 0.09207, 0.092171, 0.066461, 0.13125, 0.13124, 0.10778, 0.065951, 0.071648, 0.092323, 0.092301, 0.11359, 0.29599, 0.31908, 0.30017, 0.5141, 0.52145, 0.52145, 0.48636, 0.48618, 0.45343, 0.51531, 0.48428, 0.43789, 0.40968, 0.37386, 0.25748, 0.26672, 0.19046, 0.023498, 0.014909, 0.014912, 0.11697, 0.11038, 0.10059, 0.098256, 0.1075, 0.11179, 0.11613, 0.12052, 0.12329, 0.14191, 0.17429, 0.17709, 0.17707, 0.17626, 0.084909, 0.08701, 0.090272, 0.093004, 0.10293, 0.10305, 0.10308, 0.08879, 0.11902, 0.050033, 0.084438, 0.087631, 0.087627, 0.089191, 0.059604, 0.065804, 0.055596, 0.055448, 0.017876, 0.017857, 0.017854, 0.026385, 0.026398, 0.023016, 0.023013, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"détroit d' ormuz": {
men: [0.011038, 0.011301, 0.0056501, 0.0057161, 0.0059342, 0.0061122, 0.016998, 0.017338, 0.017899, 0.010583, 0.022079, 0.022423, 0.021929, 0.021289, 0.022342, 0.022677, 0.036246, 0.036932, 0.044858, 0.04485, 0.034109, 0.034499, 0.034499, 0.12015, 0.033452, 0.057146, 0.074765, 0.11924, 0.52029, 0.52024, 0.52008, 0.52019, 0.94626, 0.81438, 0.8139, 0.81403, 0.81334, 0.81424, 0.53023, 0.42925, 0.42921, 0.42922, 0.56251, 0.5627, 0.56167, 0.56154, 0.524, 0.39604, 0.26163, 0.32385, 0.3239, 0.324, 0.4288, 0.49894, 0.49875, 0.49875, 0.21053, 0.14823, 0.14843, 0.14847, 0.14853, 0.14872, 0.32779, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre social": {
men: [0.33041, 0.22821, 0.19434, 0.19437, 0.19437, 0.19423, 0.19418, 0.19424, 0.19412, 0.22541, 0.22545, 0.22545, 0.31669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32895, 0.32906, 0.32846, 0.32838, 0.32828, 0.2185, 0.21855, 0.26114, 0.26118, 0.24508, 0.23116, 0.19318, 0.19311, 0.2391, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33111, 0.49629, 0.64791, 0.64795, 0.72191, 0.72162, 0.722, 0.7233, 0.72413, 0.72432, 0.56378, 0.56332, 0.56358, 0.56341, 0.44377, 0.44375, 0.27806, 0.27841, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079977, 0.080036, 0.079948, 0.079948, 0.13006, 0.95323, 0.95298, 0.95278, 0.95608, 0.9549, 0.9548, 0.9545, 0.95471, 0.95484, 0.95152, 0.95095, 0.95111, 0.9503, 0.95135, 0.94426, 0.94324, 0.94314, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dalian": {
men: [0.019839, 0.019797, 0.017058, 0.017061, 0.017061, 0.030253, 0.054451, 0.057881, 0.077219, 0.083891, 0.085498, 0.085497, 0.1229, 0.083844, 0.090442, 0.090586, 0.13636, 0.13627, 0.1363, 0.094951, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94605, 0.946, 0.95385, 0.95416, 0.95453, 0.95575, 0.95578, 0.95601, 0.95678, 0.95755, 0.95776, 0.95735, 0.95834, 0.95923, 0.95351, 0.44123, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère numérique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39234, 0.71205, 0.71262, 0.7132, 0.71335, 0.71305, 0.65864, 0.65925, 0.65988, 0.65893, 0.87, 0.87006, 0.8703, 0.72976, 0.69261, 0.47077, 0.47052, 0.47047, 0.47064, 0.47066, 0.37781, 0.37766, 0.37786, 0.37854, 0.37898, 0.37907, 0.37907, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10355, 0.076378, 0.06819, 0.068222, 0.068229, 0.068291, 0.06828], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ours blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44895, 0.36912, 0.36926, 0.4126, 0.41315, 0.41328, 0.47849, 0.4791, 0.47912, 0.75709, 0.7577, 0.75832, 0.75848, 0.75815, 0.56743, 0.96116, 0.96207, 0.96069, 0.96042, 0.96049, 0.96075, 0.96037, 0.95994, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médias dominants": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.24193, 0.32464, 0.41539, 0.39123, 0.391, 0.39051, 0.39048, 0.39035, 0.39044, 0.39049, 0.39072, 0.39048, 0.39055, 0.72151, 0.62211, 0.53286, 0.2811, 0.95657, 0.9566, 0.95637, 0.95669, 0.95494, 0.45462, 0.45448, 0.45406, 0.2937, 0.29361, 0.29366, 0.29374, 0.29374, 0.29394, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033762, 0.03853, 0.038532, 0.038543, 0.036382, 0.046788, 0.046809, 0.058949, 0.067362, 0.067387, 0.067391, 0.067397, 0.06737, 0.067406, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"champ pétrolifère": {
men: [0.0062563, 0.0059449, 0.090453, 0.091961, 0.12148, 0.21956, 0.17728, 0.17733, 0.17721, 0.17713, 0.24931, 0.24931, 0.29553, 0.29599, 0.29589, 0.37655, 0, 0, 0, 0, 0.62748, 0.28155, 0.24445, 0.24374, 0.16285, 0.16281, 0.16278, 0.16268, 0.16248, 0.16246, 0.16241, 0.16245, 0.17815, 0.17826, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49522, 0.4951, 0.49494, 0.49449, 0.49461, 0.49445, 0.49453, 0.49467, 0.49468, 0.49501, 0.93915, 0.93915, 0.93951, 0.93947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18916, 0.15623, 0.11794, 0.11797, 0.10354, 0.095853, 0.095748, 0.095748, 0.095469, 0.095466, 0.095441, 0.095421, 0.095364, 0.11305, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93851, 0.93825, 0.93832, 0.93857, 0.9382, 0.93778, 0.93821, 0.93771, 0.9376, 0.93795, 0.938, 0.93808, 0.93771, 0.93821, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48004, 0.9467, 0.94644, 0.94651, 0.94676, 0.94639, 0.94597, 0.9464, 0.9459, 0.94579, 0.94614, 0.94619, 0.94627, 0.9459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25893, 0.93763, 0.93817, 0.93761, 0.93776, 0.93697, 0.938, 0.93749, 0.93647, 0.93638, 0.93641, 0.93618, 0.9365, 0.93478, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18805, 0.13933, 0.12415, 0.1241, 0.12423, 0.12434, 0.12446, 0.12428, 0.12425, 0.12426, 0.23838, 0.23829, 0.19216, 0.19225, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"victimes civiles": {
men: [0, 0.0099176, 0.01014, 0.010142, 0.010141, 0.0092944, 0.0092919, 0.0092948, 0.0092887, 0.0093937, 0.0092055, 0.0088129, 0.0091056, 0.0089556, 0.0089524, 0, 0, 0, 0, 0.0039138, 0.006832, 0.0068245, 0.0068245, 0.0069, 0.011023, 0.011374, 0.011372, 0.016367, 0.015684, 0.039733, 0.088333, 0.088352, 0.226, 0.17628, 0.13492, 0.023218, 0.023198, 0.022655, 0.011379, 0.011366, 0.011365, 0, 0, 0, 0.044598, 0.044588, 0.044573, 0.044533, 0.044543, 0.31842, 0.31847, 0.39154, 0.39154, 0.39181, 0.39166, 0.36182, 0.79412, 0.79408, 0, 0, 0, 0.56643, 0.4711, 0.47122, 0.4716, 0.47198, 0.47208, 0.47188, 0.47237, 0.56849, 0.56903, 0.56821, 0.56806, 0.56809, 0.56825, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025224, 0.024612, 0.024602, 0.0246, 0.030849, 0.030888, 0.0372, 0.037204, 0.037105, 0.037101, 0.096581, 0.096567, 0.49017, 0.49041, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pénurie alimentaire": {
men: [0.74315, 0.74157, 0.74166, 0.7418, 0.74178, 0.74127, 0.45368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65413, 0.65438, 0.65435, 0.65523, 0.65543, 0.65569, 0.65653, 0.65655, 0.65671, 0.65724, 0.65777, 0.65791, 0.65763, 0.65831, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccins pandémiques": {
men: [0.36268, 0.25921, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95257, 0.95228, 0.95186, 0.95181, 0.95059, 0.95178, 0.95095, 0.95105, 0.94851, 0.94841, 0.94737, 0.94724, 0.94713, 0.94759, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"harcèlement sexuel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9473, 0.94702, 0.9466, 0.94655, 0.94533, 0.94652, 0.94569, 0.94579, 0.94327, 0.94317, 0.94214, 0.942, 0.94189, 0.94235, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits cancérigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35782, 0.95572, 0.95625, 0.95559, 0.95583, 0.95565, 0.95635, 0.9553, 0.9553, 0.95252, 0.95248, 0.95223, 0.95204, 0.95147, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 