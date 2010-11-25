var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"conditions d' hygiène": {
men: [0.35019, 0.35003, 0.35001, 0.35003, 0.42761, 0.62161, 0.6223, 0.46407, 0.95347, 0.086716, 0.086779, 0.086726, 0.08667, 0.049854, 0.034086, 0.035597, 0.033627, 0.031537, 0.011595, 0.031496, 0.031478, 0.028793, 0.028023, 0.033109, 0.063762, 0.063789, 0.063767, 0.14835, 0.19473, 0.25341, 0.2685, 0.30442, 0.30436, 0.27297, 0.27301, 0.34469, 0.37671, 0.47836, 0.42167, 0.42167, 0.42215, 0.24125, 0.57106, 0.64082, 0.71634, 0.71644, 0.71664, 0.71692, 0.69603, 0.55306, 0.55285, 0.50471, 0.58683, 0.50579, 0.50578, 0.54545, 0.40811, 0.47806, 0.41791, 0.41782, 0.41787, 0.41776, 0.40913, 0.46793, 0.50402, 0.43837, 0.31123, 0.39963, 0.50584, 0.40907, 0.40869, 0.40859, 0.52903, 0.52891, 0.43939, 0.43888, 0.43897, 0.43892, 0.36856, 0.51092, 0.51078, 0.51081, 0, 0, 0.25191, 0.22277, 0.51298, 0.47279, 0.5452, 0.56045, 0.57588, 0.58618, 0.53703, 0.5372, 0.53718, 0.53733, 0.61144, 0.5617, 0.53932, 0.55353, 0.47039, 0.51614, 0.40306, 0.40029, 0.36615, 0.29111, 0.30044, 0.28431, 0.28443, 0.25223], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hygiène alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96428, 0.96374, 0.96424, 0.96435, 0.82659, 0.82552, 0.82506, 0.82428, 0.82421, 0.82396, 0.82337, 0.82372, 0.82343, 0.82437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46692, 0.46684, 0.46658, 0.46584, 0.46574, 0.4658, 0.46567, 0.25912, 0.25935, 0.25907, 0.36167, 0.36161, 0.36159, 0.36152, 0, 0.36136, 0.36127, 0.15232, 0.15229, 0.15226, 0.15209, 0.20573, 0.47964, 0.48039, 0.48026, 0.48012, 0.48016, 0.48014, 0.36912, 0.29774, 0.29784, 0.5228, 0.52258, 0.52205, 0.5218, 0.493, 0, 0, 0, 0, 0, 0, 0.88614, 0.88626, 0.88579, 0.88587, 0.8861, 0.88672, 0.88791, 0.92537, 0.92511, 0.96742, 0.96717, 0.96756, 0.96716], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"foyers épidémiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95078, 0.94989, 0.94981, 0.94952, 0.94883, 0.94923, 0.9489, 0.94999, 0.95508, 0.95406, 0.95409, 0.95408, 0.9539, 0.95508, 0.94682, 0.9474, 0.94754, 0.94744, 0.94805, 0.94805, 0.94912, 0.94945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4572, 0.45713, 0.45688, 0.45615, 0.45606, 0.45612, 0.94997, 0.94968, 0.95051, 0.94948, 0.94939, 0.94923, 0.94918, 0.94899, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"toxi-infections alimentaires": {
men: [0.95635, 0.49707, 0.49706, 0.49707, 0.49707, 0.36354, 0.36395, 0.36416, 0.25029, 0.21494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14828, 0.20158, 0.24856, 0.24838, 0.24848, 0.48969, 0.49025, 0.49025, 0.48973, 0.48975, 0.48974, 0.48965, 0.49026, 0.9534, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26459, 0.26454, 0.2644, 0.26398, 0.26392, 0.26396, 0.26388, 0.2638, 0.26403, 0.21116, 0.21114, 0.2111, 0.21109, 0.50038, 0, 0, 0, 0, 0, 0, 0.62856, 0.62868, 0.62861, 0.95526, 0.95499, 0.95473, 0.9548, 0.95475, 0.95452, 0.95552, 0.95581, 0.95459, 0.95419, 0.95321, 0, 0, 0, 0, 0, 0, 0, 0, 0.37845, 0.28462, 0.28447, 0.25059, 0.26213, 0.22562, 0.22592, 0.24589, 0.24582, 0.24605, 0.24599, 0.24609, 0.24599], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions sanitaires": {
men: [0, 0, 0, 0, 0, 0.25914, 0.25943, 0.31234, 0.31266, 0.33941, 0.33966, 0.33945, 0.35951, 0.2446, 0.17682, 0.14684, 0.14691, 0.14693, 0.14693, 0.11869, 0.1114, 0.073697, 0.064836, 0.068959, 0.06891, 0.068939, 0.070736, 0.082939, 0.10455, 0.11322, 0.11323, 0.11323, 0.1132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48266, 0.16063, 0.16061, 0.16052, 0.16026, 0.15212, 0.15214, 0.11316, 0.11312, 0.067689, 0.067615, 0.067609, 0.067598, 0.067594, 0, 0, 0, 0, 0, 0, 0, 0, 0.084222, 0.71581, 0.71694, 0.57061, 0.57045, 0.57049, 0.71221, 0.79169, 0.79251, 0.66047, 0.82794, 0.72934, 0.6933, 0.70333, 0.65615, 0.6562, 0.66959, 0.68036, 0.68033, 0.68053, 0.68059, 0.67179, 0.67188, 0.697, 0.65579, 0.74436, 0.69067, 0.71036, 0.75441, 0.78387, 0.68078, 0.56269, 0.54791, 0.51705], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"diarrhées": {
men: [0.082165, 0.095054, 0.068597, 0.068599, 0.11417, 0.085367, 0.071814, 0.10897, 0.10642, 0.09022, 0.087589, 0.087535, 0.10082, 0.095122, 0.074069, 0.069511, 0.065506, 0.061621, 0.04528, 0.041511, 0.03821, 0.044544, 0.042164, 0.044797, 0.045497, 0.045044, 0.045028, 0.034221, 0.045427, 0.052075, 0.059254, 0.060587, 0.065122, 0.1118, 0.16968, 0.077932, 0.10203, 0.10772, 0.10779, 0.11398, 0.1141, 0.14287, 0.12204, 0.091718, 0.064921, 0.072868, 0.072889, 0.020438, 0.018994, 0.01575, 0.017349, 0.011397, 0.0114, 0.010978, 0.0098765, 0.072071, 0.072838, 0.06332, 0.059609, 0.059596, 0.058607, 0.057917, 0.059698, 0.070078, 0.070002, 0.098954, 0.097917, 0.10143, 0.11845, 0.030788, 0.02799, 0.034232, 0.065592, 0.065578, 0.071924, 0.1439, 0.12053, 0.090036, 0.090178, 0.067096, 0.069392, 0.065556, 0.065553, 0, 0.1808, 0.24287, 0.30028, 0.30498, 0.35932, 0.41095, 0.43781, 0.45129, 0.46581, 0.47316, 0.46853, 0.47193, 0.47629, 0.47215, 0.4628, 0.49441, 0.61437, 0.65852, 0.65837, 0.56952, 0.41754, 0.40676, 0.29503, 0.2344, 0.27241, 0.28784], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections pulmonaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19717, 0.19692, 0.19681, 0.19662, 0.1966, 0.32807, 0.32784, 0.32798, 0.36042, 0.39441, 0.34757, 0.38083, 0.55578, 0.72149, 0.57459, 0.5753, 0.57537, 0.57573, 0.57581, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9635, 0.96342, 0.96326, 0.9632, 0.96301, 0.96348, 0.96259, 0.96235, 0.9639, 0.9637, 0.96356, 0.96246, 0.96264, 0.96253, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94927, 0.94951, 0.94924, 0.95012, 0.94988, 0.95027, 0.94988], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques psychosociaux": {
men: [0.41332, 0.57021, 0.57391, 0.57393, 0.57393, 0.73148, 0.16515, 0.16524, 0.16542, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35266, 0.96926, 0.96835, 0.96827, 0.96798, 0.96728, 0.96769, 0.96735, 0.84055, 0.84055, 0.83965, 0.83968, 0.83967, 0.83951, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1017, 0.12483, 0.12472, 0.14643, 0.14667, 0.16064, 0.23517, 0.2349, 0.26344, 0.26635, 0.26677, 0.26669, 0.26662, 0.26664, 0.18771, 0.35784, 0.35821, 0.35832, 0.35786, 0.45399, 0.33727, 0.3371, 0.33698, 0.18995, 0.1451, 0.31147, 0.31146, 0.25895, 0.25897, 0.18149, 0.18151, 0.18141, 0.18143, 0.12152, 0.1216, 0.12177, 0.1218, 0.20634, 0.24665, 0.055821, 0.055844, 0.076101], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services vétérinaires": {
men: [0.95957, 0.95912, 0.95671, 0.95674, 0.95673, 0.31653, 0.21779, 0.14525, 0, 0, 0, 0, 0, 0, 0.18326, 0.18316, 0.18325, 0.18328, 0.18328, 0.24229, 0.26133, 0.37624, 0.40875, 0.1841, 0.23766, 0.23776, 0.21266, 0.2029, 0.095001, 0.086503, 0.086506, 0.086505, 0.086489, 0.086595, 0.081542, 0.052207, 0.054489, 0.095568, 0, 0, 0.11824, 0.17265, 0.21181, 0.30048, 0.30014, 0.26974, 0.26982, 0.26992, 0.34402, 0.3439, 0.34378, 0.30717, 0.39953, 0.3992, 0.23112, 0.12136, 0.12134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10767, 0.10769, 0.10808, 0.18824, 0.18819, 0.18814, 0.18815, 0.12605, 0.12602, 0.12615, 0.15112, 0.15093, 0.22818, 0.22794, 0, 0, 0, 0, 0, 0.33694, 0.33704, 0.95504, 0.95518, 0.95532, 0.9548, 0.95489, 0.95515, 0.95582, 0.47855, 0.14947, 0.14943, 0.14957, 0.14953, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voie intraveineuse": {
men: [0.11497, 0.11491, 0.11491, 0.11491, 0.11491, 0.1337, 0.13385, 0.21996, 0, 0, 0, 0, 0, 0, 0.9547, 0.95417, 0.95466, 0.95477, 0.95477, 0.95353, 0.953, 0.44961, 0.44957, 0.44943, 0.44911, 0.4493, 0.44914, 0.44966, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094064, 0.08556, 0.069754, 0.073988, 0.10337, 0.083242, 0.083248, 0.083244, 0.19969, 0.19813, 0.19819, 0.19794, 0.19785, 0.19765, 0.28693, 0.31457, 0.41495, 0.41451, 0.52243, 0.67559, 0.67579, 0.67585, 0.58871, 0.95514, 0.95463, 0.95472, 0.95497, 0.95564, 0.64836, 0.3612, 0.3611, 0.36144, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infections intestinales": {
men: [0.95361, 0.95316, 0.95313, 0.95316, 0.95315, 0.95299, 0.95405, 0.95462, 0.60811, 0.60837, 0.60881, 0.60844, 0.60804, 0, 0, 0, 0, 0.1486, 0.1486, 0.14841, 0.14832, 0.14818, 0.1792, 0.17915, 0.13311, 0.077121, 0.044092, 0.044142, 0.046543, 0.048382, 0.048384, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41341, 0.3135, 0.31314, 0.31319, 0.31328, 0.25655, 0.25659, 0.25649, 0.2564, 0.25643, 0.32276, 0.3225, 0.32249, 0.39349, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42894, 0.42878, 0.42881, 0.42836, 0.42849, 0.42847, 0.4286, 0.42863, 0.4287, 0.42876, 0.42853, 0.42857, 0.95166, 0.95232, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crise sanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13911, 0.13903, 0.15046, 0.18047, 0.21668, 0.21652, 0.21661, 0.20224, 0.19592, 0.18684, 0.13151, 0.13152, 0.16414, 0.21755, 0, 0, 0, 0, 0, 0, 0, 0, 0.081555, 0.071982, 0.12562, 0.12547, 0.13357, 0.092932, 0.058616, 0.057712, 0.057691, 0.052608, 0.044907, 0.03772, 0.0364, 0.037625, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.085885, 0.11785, 0.12725, 0.12723, 0.16171, 0.15561, 0.21578, 0.21613, 0.21609, 0.21605, 0.55364, 0.55374, 0.55368, 0.55456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49767, 0.79123, 0.88251, 0.88257, 0.90326, 0.90354, 0.9035, 0.90377, 0.90385, 0.90399, 0.90411, 0.90363, 0.90371, 0.96775, 0.96613, 0.96577, 0.9565, 0.95624, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traitement antibiotique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22261, 0.28175, 0.28159, 0.28133, 0.20079, 0.13626, 0.13617, 0.13622, 0.13618, 0.13633, 0.15866, 0.1585, 0.14616, 0.16309, 0.08253, 0.082632, 0.082642, 0.082694, 0.084142, 0.088823, 0.08888, 0.08888, 0.088981, 0.089011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94753, 0.94718, 0.94725, 0.94624, 0.94653, 0.9465, 0.94677, 0.95237, 0.95252, 0.95265, 0.95214, 0.95223, 0.95248, 0.95315, 0.94664, 0.94687, 0.94661, 0.94749, 0.4083, 0.40846, 0.40829], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladies transmissibles": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95592, 0.95502, 0.95494, 0.61196, 0.61151, 0.61177, 0.61156, 0.61226, 0.61226, 0.61161, 0.36184, 0.29397, 0.29392, 0.39327, 0.18957, 0.18968, 0.13051, 0.15126, 0.25881, 0.25881, 0.2591, 0.25919, 0.25918, 0.26009, 0.31913, 0.3665, 0.36661, 0.27102, 0.27105, 0.27096, 0.35433, 0.35437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5114, 0.51147, 0.5112, 0.51124, 0.51138, 0.51174, 0.51242, 0.95825, 0.95798, 0.95887, 0.95863, 0.95902, 0.95862], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme vert": {
men: [0.079886, 0.079849, 0.090605, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50724, 0.50724, 0.50658, 0.94932, 0.94842, 0.94834, 0.94806, 0.94737, 0.94777, 0.94744, 0.94853, 0.94853, 0.34455, 0.34456, 0, 0, 0, 0, 0, 0, 0, 0.36213, 0.36213, 0.36254, 0.36267, 0.36266, 0.95528, 0.95418, 0.95432, 0.95459, 0.95496, 0.95508, 0.95474, 0.95439, 0.95451, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déshydratation": {
men: [0.056141, 0.056115, 0.088858, 0.088861, 0.08886, 0.088845, 0.074966, 0.082411, 0.10335, 0.1034, 0.10347, 0.10341, 0.11319, 0, 0, 0, 0, 0.061963, 0.061963, 0.058205, 0.061077, 0.061019, 0.056376, 0.056359, 0.03688, 0.032055, 0.039665, 0.038705, 0.040861, 0.030593, 0.027459, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.09912, 0.099103, 0.13483, 0.13461, 0.13458, 0.1346, 0.13456, 0.13452, 0.21236, 0.49842, 0.5502, 0.55011, 0.55008, 0.87488, 0.96451, 0.96363, 0.96339, 0.96494, 0.96474, 0.96459, 0.69571, 0.69584, 0.69576, 0.24757, 0.2475, 0.24743, 0.24745, 0.24743, 0, 0, 0, 0.093085, 0.19877, 0.31776, 0.38593, 0.34255, 0.34257, 0.30108, 0.28044, 0.28043, 0.28051, 0.29858, 0.29862, 0.29054, 0.29039, 0.35662, 0.3288, 0.21227, 0.076678, 0.10654, 0.10652, 0.20279, 0.093175, 0.2228, 0.18383], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets solides": {
men: [0, 0, 0, 0, 0.14139, 0.14137, 0.14153, 0.14161, 0.14176, 0.19435, 0.19449, 0.25126, 0.6957, 0.69526, 0.69631, 0.95368, 0.95417, 0.95428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13054, 0.13039, 0.13041, 0.1949, 0.19497, 0.063749, 0.042292, 0.042276, 0.042282, 0.042295, 0.04226, 0.042259, 0.042193, 0.050967, 0, 0, 0, 0, 0, 0, 0, 0, 0.93235, 0.9322, 0.93215, 0.93196, 0.93241, 0.93156, 0.93133, 0.93283, 0.93263, 0.93249, 0.93143, 0.93161, 0.9315, 0.93297, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"intoxication alimentaire": {
men: [0.14421, 0.30344, 0.33575, 0.33576, 0.33575, 0.24306, 0.20352, 0.20364, 0.18803, 0.18072, 0.12804, 0.12796, 0.1493, 0.1474, 0.11688, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12823, 0.097051, 0.096939, 0.096953, 0.096981, 0.097018, 0.097031, 0.096996, 0.096961, 0.20891, 0.20898, 0.29228, 0.25753, 0.25713, 0.20461, 0.31811, 0.31761, 0.31754, 0.31758, 0.31749, 0.31739, 0.1046, 0.10448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091982, 0.20278, 0.33032, 0.33084, 0.297, 0.45516, 0.45519, 0.2664, 0.26634, 0.28948, 0.28957, 0.2892, 0.3162, 0.31588, 0.21697, 0, 0, 0, 0, 0, 0, 0, 0.95609, 0.95623, 0.95571, 0.65711, 0.65729, 0.65775, 0.65863, 0.65879, 0.65861, 0.65922, 0.29339, 0.29351, 0.29339], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie endémique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95011, 0.95011, 0.36057, 0.36037, 0.36003, 0.36, 0.3599, 0.35964, 0.35979, 0.23041, 0.23068, 0.23068, 0.23043, 0.23044, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21294, 0.21368, 0.21344, 0.24599, 0.24606, 0.20967, 0.18368, 0.18361, 0.20954, 0.27764, 0.27772, 0.2775, 0.27749, 0.27705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94472, 0.94437, 0.95375, 0.61591, 0.6161, 0.61607, 0.61625, 0.61631, 0.6164, 0.61649, 0.61616, 0.61622, 0.61638, 0.61681, 0.50716, 0.50729, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie tropicale": {
men: [0, 0, 0, 0, 0.92757, 0.92741, 0.92844, 0.929, 0.92996, 0.93035, 0.93103, 0.93046, 0.022406, 0.022392, 0.022426, 0.022413, 0.022425, 0.022428, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10207, 0.13536, 0.13531, 0.13526, 0.13528, 0.10819, 0.12931, 0.12931, 0.12911, 0.12908, 0.12901, 0.12881, 0.096538, 0.093126, 0.053502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.36322, 0.95359, 0.95372, 0.95321, 0.9533, 0.95355, 0.95422, 0.95549, 0.95574, 0.95547, 0.17932, 0.17927, 0.17934, 0.17927], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé et la sécurité": {
men: [0.50039, 0.50016, 0, 0, 0, 0, 0, 0, 0.17784, 0.17791, 0.17804, 0.13898, 0.094083, 0.092973, 0.066141, 0.055776, 0.055805, 0.055811, 0.055811, 0.055739, 0.055708, 0.052352, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021814, 0.021828, 0.021828, 0.018669, 0.022834, 0.10794, 0.10832, 0.10819, 0.10821, 0.10824, 0.10166, 0.10167, 0.16404, 0.22984, 0.18215, 0.18221, 0.18206, 0.24434, 0.24396, 0, 0, 0, 0, 0, 0, 0, 0.31013, 0.32452, 0.33612, 0.33606, 0.33604, 0.2885, 0.32133, 0.32103, 0.46225, 0.46299, 0.46289, 0.47931, 0.48694, 0.57735, 0.36714, 0.35723, 0.30016, 0.30008, 0.32774, 0.41172, 0.33149, 0.33184, 0.33194, 0.30893, 0.3088, 0.25482, 0.1977, 0.18173, 0.18174, 0.1637, 0.3308, 0.33079, 0.26779, 0.283, 0.28665, 0.21365, 0.21353, 0.24237, 0.24243, 0.2426, 0.24293, 0.24299, 0.24292, 0.34206, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agents infectieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18118, 0.25216, 0.41406, 0.41383, 0.69417, 0.69411, 0.6939, 0.6934, 0.69369, 0.95809, 0.95918, 0.95918, 0.95816, 0.96365, 0.96187, 0.96169, 0.96288, 0.963, 0.95732, 0.95746, 0.38294, 0.38319, 0.38319, 0.38362, 0.31979, 0.31979, 0.3209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0.28249, 0.28278, 0.2829, 0.28311, 0.28294, 0.28275, 0.35529, 0.35583, 0.35563, 0.24226, 0.24229, 0.42176, 0.42121, 0.70674, 0.74565, 0.74559, 0.74536, 0.74482, 0.74514, 0.74488, 0.74573, 0.79576, 0.71228, 0.84389, 0.84388, 0.84372, 0.84477, 0.77111, 0.16063, 0.16065, 0.16064, 0.16074, 0.16074, 0.16092, 0.16098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouveaux antibiotiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30086, 0.35207, 0.24231, 0.19261, 0.17886, 0.17863, 0.23769, 0.21151, 0.2115, 0.26816, 0.24736, 0.22877, 0.22869, 0.22896, 0.20931, 0.16601, 0.21392, 0.28099, 0.31834, 0.31873, 0.20426, 0.28832, 0.28836, 0, 0, 0, 0, 0, 0.37641, 0.1146, 0.11447, 0.097509, 0.027523, 0.049011, 0.068796, 0.064309, 0.064285, 0.064293, 0.064313, 0.064261, 0.066674, 0.066569, 0.043783, 0.051264, 0.051183, 0.053465, 0.23085, 0.17895, 0, 0, 0, 0, 0, 0, 0, 0, 0.95262, 0.95238, 0.95392, 0.95372, 0.95358, 0.95248, 0.95267, 0.95256, 0.29206, 0.29198, 0.2919, 0.29192, 0.29191, 0.24743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bactéries résistantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2322, 0.12188, 0.073448, 0.073448, 0.065594, 0.15521, 0.18316, 0.18315, 0.19882, 0.19868, 0.19876, 0.19348, 0.19371, 0.21265, 0.20217, 0.24902, 0.38172, 0.38165, 0.45413, 0.3879, 0.39238, 0.39244, 0.18616, 0.053628, 0.053628, 0.049369, 0.049386, 0.0066017, 0.0066246, 0.006617, 0.006618, 0.0066199, 0.052113, 0.077697, 0.072895, 0.072868, 0.081932, 0.19638, 0.19622, 0.29176, 0.29131, 0.29126, 0.2911, 0.29064, 0.29057, 0.29061, 0.17015, 0, 0, 0, 0, 0, 0, 0, 0, 0.27785, 0.27778, 0.27823, 0.27817, 0.27813, 0.27781, 0.27786, 0.27783, 0.95406, 0.9538, 0.95353, 0.9536, 0.95356, 0.60101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tentative de suicide": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13771, 0.11059, 0.10009, 0.04424, 0.044241, 0.044241, 0.044232, 0.044287, 0.044293, 0.042677, 0.053794, 0.05534, 0.055376, 0.055376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34979, 0.34977, 0.34969, 0.34987, 0.22629, 0.22623, 0.25417, 0.28933, 0.28929, 0.28117, 0.28122, 0.35366, 0.37698, 0.45244, 0.18119, 0.1812, 0.18119, 0.18115, 0.62895, 0.62914, 0.62834, 0.62807, 0.62743, 0.73945, 0.75325, 0.21481, 0.21458, 0.21465, 0.92873, 0.929, 0.92908, 0.92922, 0.92935, 0.034466, 0.034469, 0.034478, 0.034502, 0.007675, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"baignade": {
men: [0.046354, 0.045889, 0.061283, 0.061375, 0.05866, 0.095779, 0.142, 0.12084, 0.042279, 0.044572, 0.055474, 0.052099, 0.053146, 0.046198, 0.025324, 0.025995, 0.030507, 0.02701, 0.026768, 0.013353, 0.011566, 0.011633, 0.011142, 0.0078154, 0.0068441, 0.0060458, 0.029135, 0.029972, 0.035914, 0.035686, 0.035688, 0.038406, 0.039825, 0.034145, 0.037624, 0.038713, 0.03939, 0.058438, 0.074714, 0.11181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15601, 0.15606, 0.15594, 0.52932, 0.52849, 0.39164, 0.39142, 0.3908, 0.39072, 0.39077, 0.45292, 0.26975, 0.26999, 0.251, 0.088815, 0.0888, 0.088795, 0.065314, 0.053728, 0.068582, 0.068565, 0.068675, 0.068661, 0.068651, 0.015519, 0.024972, 0.02497, 0.028168, 0, 0, 0, 0, 0, 0, 0, 0, 0.35149, 0.6226, 0.47975, 0.47957, 0.4796, 0.47909, 0.53715, 0.53713, 0.53728, 0.6607, 0.6608, 0.6609, 0.66054, 0.6606, 0.57276, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"services hospitaliers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.61971, 0.1921, 0.19208, 0.19202, 0.19188, 0.19196, 0.15842, 0.14405, 0.15676, 0.15659, 0.13442, 0.13442, 0.1344, 0.13456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.52017, 0.61556, 0.61489, 0.54087, 0.54078, 0.54075, 0.54064, 0.47684, 0.20694, 0.20688, 0.19081, 0.19077, 0.19074, 0.19052, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13364, 0.12353, 0.16522, 0.14719, 0.16269, 0.1627, 0.16847, 0.16852, 0.16851, 0.1598, 0.17332, 0.20469, 0.20472, 0.24151, 0.25113, 0.3192, 0.35371, 0.62935, 0.62951, 0.62934, 0.62992, 0.62976, 0.63002, 0.13561], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"muqueuses": {
men: [0.29989, 0.29975, 0.26023, 0.26024, 0.3242, 0.25186, 0.25214, 0.26478, 0.26505, 0.22547, 0.22563, 0.2255, 0.21147, 0.011376, 0.016218, 0.016209, 0.018137, 0.018139, 0, 0, 0, 0.29693, 0.29691, 0.47521, 0.47487, 0.47507, 0.4067, 0.40717, 0.36536, 0.36497, 0.25762, 0.23482, 0.23477, 0.19793, 0.19796, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21146, 0.21139, 0.21141, 0.21148, 0.15779, 0.15778, 0.18716, 0.26067, 0.17978, 0.11102, 0.10385, 0.10386, 0.097399, 0.09028, 0, 0, 0.011733, 0.011182, 0.013499, 0.011102, 0.0084998, 0.0078756, 0.0074783, 0.0099211, 0.010536, 0.010534, 0.0073021, 0.0077375, 0.0077366, 0.0077488, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21136, 0.17541, 0.17544, 0.29642, 0.29645, 0.29653, 0.29674, 0.29713, 0.29721, 0.45543, 0.45585, 0.34648, 0.34662, 0.45027], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 