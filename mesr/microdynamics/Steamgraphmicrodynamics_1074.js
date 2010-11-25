var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"pluies acides": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61194, 0.61183, 0.61186, 0.61187, 0.61187, 0.61122, 0.82377, 0.82259, 0.9704, 0.9704, 0.97022, 0.96979, 0.97019, 0.97127, 0, 0, 0, 0, 0, 0, 0, 0.48238, 0.48241, 0.25486, 0.25473, 0.40125, 0.40152, 0.40124, 0.40124, 0.40195, 0.40172, 0.50925, 0.51133, 0.50985, 0.50942, 0.27188, 0.27188, 0.57167, 0.43681, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"géothermie": {
men: [0.025221, 0.026879, 0.031367, 0.030896, 0.030738, 0.030898, 0.059231, 0.095553, 0.10453, 0.10862, 0.10862, 0.10866, 0.14855, 0.15482, 0.5314, 0.5315, 0, 0, 0, 0, 0, 0, 0, 0.96988, 0.96981, 0.96981, 0.21895, 0.19474, 0.19482, 0.19504, 0.16237, 0.16201, 0.16201, 0.1621, 0.16151, 0.11478, 0.1003, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10076, 0.10275, 0.0828, 0.054758, 0.054758, 0.044914, 0.10043, 0.090617, 0.10038, 0.10169, 0.091414, 0.091868, 0.095988, 0.093982, 0.065326, 0.065343, 0.067073, 0.1409, 0.13635, 0.15716, 0.12425, 0.15006, 0.15013, 0.16284, 0.23767, 0.45935, 0.56046, 0.59944, 0.70559, 0.70559, 0.84701, 0.41095, 0.45351, 0.2717, 0.28967, 0.28966, 0.25388, 0.24385, 0.19591, 0.12908, 0.053933, 0.053981, 0.054071, 0.054071, 0.054237], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière solaire": {
men: [0, 0, 0.15479, 0.15483, 0.15483, 0.17931, 0.13492, 0.15966, 0.15992, 0.16005, 0.16005, 0.16011, 0.23472, 0.23489, 0.23483, 0.34963, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23155, 0.37405, 0.96704, 0.97094, 0.97032, 0.97032, 0.9691, 0.9691, 0.96895, 0.96793, 0.60744, 0.60704, 0.6071, 0.77174, 0.49153, 0.25679, 0.19268, 0.16378, 0.16383, 0.16383, 0.12544, 0.11966, 0.11346, 0.11352, 0.10513, 0.10518, 0.10526, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ferme éolienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34536, 0.37894, 0.4248, 0.42546, 0.42579, 0.67122, 0.67079, 0.56509, 0.56438, 0.56438, 0.56429, 0.5637, 0.77248, 0.77197, 0.37454, 0.37392, 0.67692, 0.43928, 0.43935, 0.43935, 0.43947, 0.51198, 0.51221, 0.47562, 0.47566, 0.47592, 0.47627, 0.47647, 0.47684, 0.47745, 0.20949, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"choix énergétiques": {
men: [0, 0.97503, 0.6423, 0.64249, 0.64248, 0.64209, 0.64245, 0.64355, 0.64461, 0.64514, 0.64514, 0.64538, 0.64583, 0.64631, 0.64614, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.58279, 0.1441, 0.14468, 0.1307, 0.13059, 0.34188, 0.34188, 0.34188, 0.34188, 0.33435, 0.33435, 0.27621, 0.28769, 0.28769, 0.23845, 0.36216, 0.36198, 0.35597, 0.35624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt boréale": {
men: [0, 0, 0, 0, 0.040713, 0.040689, 0.040712, 0.040781, 0.040849, 0.040882, 0.040882, 0.040897, 0.040926, 0.94571, 0.94547, 0.96802, 0.96927, 0.82816, 0.81467, 0.81468, 0.81468, 0.64076, 0.64076, 0.63984, 0.63979, 0.63979, 0.63967, 0.63939, 0.63966, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emplois verts": {
men: [0.42957, 0.45977, 0.52012, 0.52027, 0.52026, 0.25463, 0.15374, 0.13473, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12496, 0.12496, 0.12478, 0.12477, 0.12477, 0.29485, 0.29472, 0.29484, 0.29517, 0.34868, 0.34792, 0.34792, 0.28116, 0.4938, 0, 0, 0, 0, 0, 0, 0.29315, 0.29335, 0.29314, 0.26574, 0.2662, 0.26606, 0.30414, 0.22057, 0.21993, 0.20194, 0.20122, 0.24813, 0.24813, 0.30661, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036271, 0.038213, 0.038188, 0.037602, 0.050054, 0.065662, 0.055995, 0.056004, 0.056004, 0.056019, 0.053095, 0.053119, 0.056742, 0.068157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11694, 0.10638, 0.10638, 0.097236, 0.097259, 0.18437, 0.18446, 0.10642, 0.12771, 0.12792, 0.12792, 0.082407], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"centrales hydroélectriques": {
men: [0, 0.15704, 0.15679, 0.16631, 0.16631, 0.23047, 0.2306, 0.231, 0.23138, 0.23157, 0.23157, 0.23165, 0.26716, 0.1092, 0.15502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26692, 0.24166, 0.28606, 0.25502, 0.23415, 0.23415, 0.23388, 0.27264, 0.27251, 0.38604, 0.38633, 0.38789, 0.38764, 0.38764, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36138, 0.36194, 0.32847, 0.32783, 0.32783, 0.3271, 0.32717, 0.32741, 0.32718, 0.3269, 0.32689, 0.32689, 0.32697, 0.76173, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique énergétique": {
men: [0.057759, 0.074673, 0.062765, 0.061235, 0.056839, 0.05545, 0.055482, 0.054921, 0.055012, 0.053936, 0.053936, 0.053956, 0.051383, 0.085456, 0.076077, 0.04053, 0.078929, 0.082709, 0.15091, 0.20979, 0.14101, 0.13639, 0.13639, 0.083948, 0.083942, 0.083942, 0.083926, 0.08389, 0.11822, 0.11836, 0.11863, 0.28852, 0.28852, 0.28867, 0.31492, 0.34313, 0.34298, 0.65011, 0.65015, 0.65015, 0.21879, 0.21885, 0.15825, 0.15814, 0.14784, 0.028665, 0.028649, 0.084197, 0.063425, 0.063242, 0.058872, 0.19833, 0.18803, 0.16919, 0.2575, 0.25776, 0.25776, 0.22234, 0.21614, 0.22199, 0.22174, 0.20122, 0.16401, 0.16427, 0.17059, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072494, 0.081676, 0.099998, 0.099998, 0.1034, 0.10673, 0.03824, 0.032303, 0.030823, 0.027934, 0.029305, 0.029333], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0, 0, 0.16225, 0.1623, 0.1623, 0.051826, 0.051856, 0.055784, 0.055877, 0.060672, 0.060672, 0.060694, 0.060737, 0.060782, 0.060766, 0.10921, 0.063379, 0.063368, 0.063371, 0.96817, 0.96817, 0.96715, 0.96715, 0.96577, 0.9657, 0.9657, 0.36782, 0.24741, 0.24751, 0.17971, 0.18013, 0.17973, 0.17973, 0.17983, 0.14145, 0.14158, 0.14152, 0.14155, 0.14156, 0.12076, 0.1269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie éolienne": {
men: [0.20047, 0.19399, 0.23781, 0.23277, 0.23828, 0.23814, 0.2087, 0.22525, 0.11881, 0.085856, 0.085856, 0.085888, 0.097607, 0.098072, 0.11676, 0.12581, 0.0055824, 0.028924, 0.023209, 0.019043, 0.027002, 0.025174, 0.02452, 0.024484, 0.022928, 0.022928, 0.02375, 0.01237, 0.0092296, 0.0088082, 0.0088984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050841, 0.17998, 0.22605, 0.21345, 0.19885, 0.17696, 0.17696, 0.13411, 0.15003, 0.15875, 0.15336, 0.17214, 0.18508, 0.18537, 0.17894, 0.085, 0.077353, 0.069167, 0.091299, 0.10332, 0.1033, 0.22523, 0.19988, 0.19975, 0.21088, 0.17453, 0.26183, 0.29095, 0.27907, 0.25905, 0.28673, 0.35245, 0.27254, 0.24797, 0.24798, 0.16841, 0.18227, 0.17788, 0.17802, 0.1864, 0.10288, 0, 0, 0, 0, 0, 0, 0, 0, 0.014632, 0.012278, 0.012125, 0.012128, 0.012094, 0.018537, 0.018305, 0.019653, 0.020469, 0.020469, 0.020129], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modèle européen": {
men: [0.38249, 0.38218, 0.46545, 0.58705, 0.81214, 0.81164, 0.81211, 0.81349, 0.81484, 0.8155, 0.8155, 0.8158, 0.81638, 0.53126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traitements préventifs": {
men: [0, 0, 0, 0, 0.94011, 0.93954, 0.94008, 0.94167, 0.94323, 0.944, 0.944, 0.94435, 0.94502, 0.94571, 0.051504, 0.051515, 0.051581, 0.051573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie tropicale": {
men: [0, 0, 0, 0, 0.94011, 0.93954, 0.94008, 0.94167, 0.94323, 0.944, 0.944, 0.94435, 0.022772, 0.022788, 0.022782, 0.022787, 0.022816, 0.022813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie nucléaire": {
men: [0, 0, 0, 0, 0.0044529, 0.0050291, 0.0053081, 0.034123, 0.034844, 0.032843, 0.029843, 0.029854, 0.034377, 0.034402, 0.14249, 0.107, 0.12135, 0.12282, 0.11974, 0.11974, 0.11974, 0.11041, 0.11041, 0.094547, 0.09133, 0.079005, 0.073182, 0.095451, 0.035406, 0.044793, 0.042763, 0.038602, 0.036042, 0.086778, 0.083384, 0.087224, 0.083583, 0.096216, 0.10901, 0.12167, 0.083411, 0.057755, 0.057638, 0.061465, 0.062893, 0.062601, 0.067067, 0, 0, 0, 0.058156, 0.088341, 0.088341, 0.088873, 0.14101, 0.13029, 0.12361, 0.10532, 0.16323, 0.18936, 0.18914, 0.18617, 0.14789, 0.12737, 0.10729, 0.081315, 0.081262, 0.080777, 0.083606, 0.079962, 0.08122, 0.082673, 0.045097, 0.084424, 0.083956, 0.075233, 0.073682, 0.090367, 0.083943, 0.088298, 0.088322, 0.086024, 0.12374, 0.20691, 0.24848, 0.26284, 0.26175, 0.17952, 0.18209, 0.11103, 0.11105, 0.1094, 0.17314, 0.17556, 0.16992, 0.18375, 0.1419, 0.074436, 0.060688, 0.041899, 0.037529, 0.036794, 0.034677, 0.02838, 0.024698, 0.025556, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies vertes": {
men: [0, 0, 0.19185, 0.20612, 0.20611, 0.20599, 0.24194, 0.18578, 0.15619, 0.17239, 0.16486, 0.16492, 0.19135, 0.23955, 0.23949, 0.24952, 0.064859, 0.064848, 0.05719, 0.035906, 0.035906, 0.13101, 0.14785, 0.14763, 0.15473, 0.15473, 0.15471, 0.15249, 0.13034, 0.11547, 0.11521, 0.11496, 0.11384, 0.15577, 0.1552, 0.080455, 0.078345, 0.078365, 0.07837, 0.07837, 0.069878, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.08214, 0.081847, 0.081847, 0.081847, 0.077961, 0.081197, 0.081197, 0.079635, 0.10642, 0.10295, 0.091217, 0.1126, 0.094808, 0.088222, 0.056881, 0.049809, 0.049777, 0.04472, 0.050944, 0.044878, 0.042544, 0.044165, 0.036427, 0.03695, 0.032034, 0.019819, 0.018983, 0.019131, 0, 0, 0, 0, 0, 0.034157, 0.035615, 0.035635, 0.040424, 0.040441, 0.046928, 0.051767, 0.12625, 0.11819, 0.1121, 0.12278, 0.12278, 0.13593, 0.14867, 0.096356, 0.085369, 0.083236, 0.085874, 0.085874, 0.0904, 0.085155, 0.05945, 0.064561, 0.067098, 0.045557, 0.045557, 0.028306], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biologie synthétique": {
men: [0, 0, 0, 0, 0.94011, 0.93954, 0.94008, 0.14989, 0.15013, 0.15026, 0.15026, 0.15031, 0.15042, 0.15053, 0.060495, 0.060508, 0.060586, 0.060576, 0, 0, 0, 0.47462, 0.47462, 0.47394, 0.43994, 0.43994, 0.43986, 0.43967, 0.29269, 0.29302, 0.29369, 0.29305, 0.29305, 0.2932, 0.29213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût de la marée noire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96878, 0.96986, 0.97209, 0.96998, 0.96998, 0.97049, 0.96694, 0.96784, 0.96742, 0.037381, 0.037383, 0.035567, 0.035549, 0.035559, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie thermique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13277, 0.13277, 0.24016, 0.24014, 0.24014, 0.2401, 0.23999, 0.24009, 0.26515, 0.37779, 0.65169, 0.97728, 0.97779, 0.97421, 0.96866, 0.96824, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26031, 0.4438, 0.44372, 0.44374, 0.44375, 0.44375, 0.44328, 0.44328, 0.33697, 0.33695, 0.33695, 0.33688, 0.33674, 0.57326, 0, 0, 0, 0, 0, 0.41341, 0.29072, 0.17806, 0.23577, 0.23578, 0.23578, 0.23566, 0.18131, 0.18143, 0.18131, 0.18131, 0.18163, 0.18152, 0.18164, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"butanol": {
men: [0, 0, 0, 0, 0.018954, 0.037136, 0.037157, 0.03722, 0.037282, 0.944, 0.944, 0.94435, 0.94502, 0.94571, 0.94547, 0.94566, 0.94688, 0.94672, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de centrale": {
men: [0.56061, 0.56015, 0.55927, 0.55943, 0.55942, 0.55908, 0.5594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17264, 0.1728, 0.17273, 0.17277, 0.95815, 0.95815, 0.14608, 0.14612, 0.074854, 0.074802, 0.074802, 0.074934, 0.074892, 0.05811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.061313, 0.061273, 0.061279, 0.061177, 0.063702, 0.058943, 0.058952, 0.057466, 0.058645, 0.058645, 0.05571, 0.055669, 0.061925, 0.24652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pollueurs": {
men: [0.11008, 0.088521, 0.093091, 0.093119, 0.093117, 0.09306, 0.068343, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10375, 0.1188, 0.1188, 0.13666, 0.18415, 0.46811, 0.97249, 0.97249, 0.97421, 0.61665, 0.61705, 0.61957, 0.33671, 0.29046, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.034589, 0.034608, 0.030128, 0.028455, 0.029998, 0.036508, 0.029858, 0.032623, 0.034164, 0.028456, 0.025649, 0.023903, 0.021274, 0.02256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046849, 0.041962, 0.0455, 0.049808, 0.054154, 0.068817, 0.036073, 0.027155, 0.024389, 0.02405, 0.023133, 0.023354, 0.023302, 0.023717, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"questions énergétiques": {
men: [0.12785, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18681, 0.18757, 0.16425, 0.15642, 0.15586, 0.1352, 0.17211, 0.17211, 0.17228, 0.17228, 0.17239, 0.20311, 0.20311, 0.20288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22669, 0.95677, 0.95727, 0.95891, 0.95977, 0.41471, 0.41471, 0.41598], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie solaire": {
men: [0.058795, 0.059906, 0.13191, 0.13479, 0.1217, 0.07977, 0.059802, 0.059582, 0.061983, 0.077304, 0.077272, 0.077301, 0.088678, 0.093941, 0.098749, 0.11221, 0.024968, 0.02393, 0.026347, 0.20059, 0.1893, 0.20773, 0.2008, 0.20051, 0.20593, 0.20593, 0.21955, 0.15327, 0.10351, 0.091973, 0.092184, 0.081014, 0.075958, 0.02494, 0.023448, 0.022777, 0.021439, 0.020981, 0.02045, 0.02045, 0.014429, 0.01498, 0.015903, 0.015314, 0.014207, 0.015066, 0.015071, 0, 0, 0, 0.012098, 0.012129, 0.012196, 0.012131, 0.015356, 0.014324, 0.015309, 0.015426, 0.016832, 0.01729, 0.018008, 0.02129, 0.054271, 0.054198, 0.043262, 0.042853, 0.043404, 0.043751, 0.048685, 0.05571, 0.050559, 0.049289, 0.071365, 0.06864, 0.069459, 0.075807, 0.075502, 0.076338, 0.081596, 0.080723, 0.080918, 0.080918, 0.095429, 0.10054, 0.1164, 0.12396, 0.095902, 0.10158, 0.10102, 0.094609, 0.068941, 0.13206, 0.11794, 0.10286, 0.10286, 0.10899, 0.10336, 0.10002, 0.099344, 0.098031, 0.090973, 0.088744, 0.089131, 0.08575, 0.074693, 0.027096, 0.02939, 0.036023, 0.032303, 0.022173], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"objectifs du millénaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15308, 0.14804, 0.10146, 0.072056, 0.064268, 0.064268, 0.048715, 0.013587, 0.010724, 0.010534, 0.01019, 0.0099842, 0.0099005, 0.0098403, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22507, 0.25938, 0.32399, 0.42607, 0.53847, 0.53859, 0.53897, 0.5386, 0.53814, 0.59694, 0.59694, 0.59708, 0.59685, 0.59716, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.45786, 0.45858, 0.45771, 0.45683, 0.45683, 0.45581, 0.45591, 0.38037, 0.3801, 0.56903, 0.56902, 0.56902, 0.67913, 0.67888, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"handicapés mentaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96988, 0.96981, 0.96981, 0.96963, 0.9692, 0.33563, 0.22545, 0.22597, 0.22548, 0.22548, 0.22559, 0.22477, 0.22498, 0.22488, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"milieu marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95958, 0.95956, 0.95956, 0.95978, 0.5825, 0.58281, 0.58381, 0.34312, 0.23063, 0.23063, 0.23134], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 