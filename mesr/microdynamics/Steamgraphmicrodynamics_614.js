var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"ferme éolienne": {
men: [0, 0, 0, 0.27681, 0.27666, 0.93608, 0.93601, 0.93614, 0.93642, 0.93623, 0.93607, 0.94498, 0.94542, 0.94669, 0.94823, 0.95522, 0.95556, 0.95361, 0.95383, 0.9596, 0.96025, 0.96016, 0.96034, 0.96113, 0.96113, 0.95891, 0.95927, 0.95811, 0.96196, 0.95957, 0.95946, 0.95917, 0.95959, 0.95486, 0.9542, 0.95473, 0.95372, 0.95204, 0.71529, 0.71511, 0.71426, 0.71386, 0.65602, 0.65563, 0.77917, 0.77915, 0.77897, 0.6463, 0.64619, 0.64592, 0.64578, 0.77632, 0.85252, 0.8526, 0.85325, 0.85331, 0.82135, 0.82134, 0.82781, 0.82793, 0.53619, 0.58805, 0.61605, 0.61597, 0.6164, 0.41747, 0.41733, 0.50313, 0.50311, 0.50357, 0.50334, 0.5036, 0.33413, 0.33412, 0.94855, 0.94903, 0.95678, 0.96381, 0.96281, 0.96152, 0.96189, 0.96027, 0.96004, 0.96066, 0.96078, 0.96065, 0.96073, 0.96064, 0.96035, 0.95893, 0.95517, 0.93476, 0.95201, 0.95266, 0.95265, 0.95211, 0.95264, 0.95046, 0.95552, 0.95435, 0.95529, 0.95533, 0.95551, 0.95681, 0.9562, 0.95613, 0.94849, 0.94893, 0.94883, 0.94932], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière solaire": {
men: [0.46921, 0.59604, 0.65483, 0.65481, 0.65446, 0.75813, 0.8091, 0.95598, 0.95626, 0.95607, 0.9559, 0.95601, 0.95281, 0.95409, 0.95565, 0.95175, 0.94783, 0.94786, 0.94807, 0.95344, 0.94584, 0.94576, 0.94593, 0.9467, 0.9467, 0.94661, 0.94696, 0.94582, 0.9439, 0.94421, 0.9441, 0.94382, 0.94423, 0, 0, 0, 0, 0, 0, 0.25227, 0.25197, 0.37396, 0.50586, 0.50556, 0.50488, 0.50487, 0.50475, 0.50445, 0.50436, 0.95454, 0.95629, 0.95704, 0.95712, 0.95504, 0.95577, 0.95371, 0.94898, 0.94897, 0.94992, 0.95006, 0.95017, 0.95024, 0.95187, 0.9472, 0.93891, 0.93895, 0.93862, 0.93847, 0.93844, 0.9393, 0.93887, 0.93935, 0.94392, 0.94391, 0.94398, 0.94999, 0.94988, 0.63487, 0.71618, 0.75252, 0.75281, 0.75269, 0.63132, 0.64646, 0.66317, 0.66308, 0.68585, 0.68579, 0.68558, 0.65022, 0.62997, 0.73364, 0.70306, 0.6508, 0.65079, 0.65042, 0.94929, 0.95003, 0.94836, 0.9472, 0.94102, 0.94106, 0.94124, 0.94252, 0.94191, 0.94185, 0.93589, 0.93632, 0.93623, 0.93671], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production photovoltaïque": {
men: [0.40808, 0.62577, 0.64564, 0.64563, 0.64528, 0.64507, 0.64503, 0.64512, 0.64531, 0.64518, 0.64506, 0.64514, 0.64544, 0.6463, 0.53311, 0, 0, 0.94716, 0.94737, 0.94757, 0.94822, 0.94813, 0.94831, 0.94908, 0.94909, 0.949, 0.94935, 0.9482, 0.95938, 0.96161, 0.9615, 0.95899, 0.9594, 0.95954, 0.96186, 0.9624, 0.96138, 0.95969, 0.95971, 0.95947, 0.95833, 0.9578, 0.95007, 0.94491, 0.94363, 0.94361, 0.94339, 0.94282, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94442, 0.65815, 0.50544, 0.50546, 0.50529, 0.50521, 0.50519, 0.50565, 0.50542, 0.50568, 0.42701, 0.42701, 0.42704, 0.64595, 0.53169, 0.63114, 0.77604, 0.775, 0.7753, 0.77518, 0.77499, 0.77492, 0.77502, 0.77491, 0.94868, 0.94859, 0.94831, 0.93193, 0.93221, 0.93282, 0.93285, 0.9335, 0.93349, 0.93296, 0.93347, 0.93298, 0.93291, 0.93176, 0.93169, 0.93173, 0.93191, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie éolienne": {
men: [0.7423, 0.71894, 0.7503, 0.75523, 0.7665, 0.76626, 0.76758, 0.76474, 0.69807, 0.73018, 0.73005, 0.73014, 0.75565, 0.69683, 0.66894, 0.72059, 0.6805, 0.65024, 0.64841, 0.62295, 0.60498, 0.56456, 0.67667, 0.67722, 0.69625, 0.69618, 0.47545, 0.66759, 0.46489, 0.44331, 0.43901, 0.46145, 0.46165, 0.48606, 0.48572, 0.54647, 0.55092, 0.5801, 0.51356, 0.51343, 0.54922, 0.47847, 0.65777, 0.66807, 0.70267, 0.64391, 0.64376, 0.63846, 0.61056, 0.55823, 0.5911, 0.60335, 0.72804, 0.74183, 0.75834, 0.74314, 0.74345, 0.8307, 0.81343, 0.86079, 0.86485, 0.86159, 0.89736, 0.89724, 0.91605, 0.87899, 0.89285, 0.75678, 0.74392, 0.75719, 0.75684, 0.58662, 0.6303, 0.6303, 0.61123, 0.63572, 0.61759, 0.55236, 0.56918, 0.58438, 0.54303, 0.66738, 0.61074, 0.52988, 0.52994, 0.63582, 0.6081, 0.59316, 0.59298, 0.57465, 0.5157, 0.53254, 0.41147, 0.48784, 0.48784, 0.48756, 0.50411, 0.4801, 0.42843, 0.23226, 0.19488, 0.21497, 0.21501, 0.21714, 0.202, 0.20917, 0.22425, 0.1946, 0.19458, 0.19087], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet solaire": {
men: [0.51327, 0.46369, 0.56887, 0.56885, 0.56855, 0.56836, 0.63851, 0.64056, 0.64075, 0.64062, 0.64051, 0.64058, 0.42586, 0.42643, 0.94918, 0.94908, 0.94942, 0.94944, 0.94965, 0.94986, 0.95051, 0.95042, 0.9506, 0.95138, 0.95138, 0.95129, 0.95164, 0.95049, 0.39939, 0, 0.39948, 0.39936, 0.39953, 0.29462, 0.23317, 0.25901, 0.23555, 0.31654, 0.31655, 0.31647, 0.47954, 0.44255, 0.52022, 0.51991, 0.51921, 0.51919, 0.51908, 0.48923, 0.53887, 0.56131, 0.59478, 0.58537, 0.58542, 0.58548, 0.52159, 0.57454, 0.53777, 0.53777, 0.48734, 0.48741, 0.48747, 0.6764, 0.59499, 0.77398, 0.45542, 0.45265, 0.45249, 0.45242, 0.55467, 0.65525, 0.61141, 0.5281, 0.49115, 0.49115, 0.49119, 0.42968, 0.39012, 0.57703, 0.62385, 0.62003, 0.62028, 0.62018, 0.63262, 0.61831, 0.61839, 0.6255, 0.64633, 0.64626, 0.60152, 0.68313, 0.75768, 0.65966, 0.65969, 0.5773, 0.5773, 0.57697, 0.50919, 0.50892, 0.55822, 0.5926, 0.55907, 0.5591, 0.61537, 0.5634, 0.59028, 0.54435, 0.54403, 0.77658, 0.7765, 0.77691], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière industrielle": {
men: [0.58206, 0.61166, 0.68043, 0.62714, 0.72739, 0.72715, 0.64639, 0.94906, 0.94152, 0.94134, 0.94117, 0.94128, 0.94171, 0.94298, 0.94452, 0.9499, 0.94244, 0.94247, 0.94268, 0.94288, 0.94353, 0.94344, 0.94362, 0.94438, 0.95284, 0.95275, 0.9531, 0.96071, 0.96212, 0.96126, 0.88888, 0.88861, 0.88899, 0.88912, 0.80371, 0.80416, 0.80331, 0.80189, 0.70824, 0.70094, 0.63765, 0.46186, 0.34654, 0.33633, 0.34584, 0.34583, 0.34576, 0.31863, 0.26357, 0.26345, 0.31229, 0.31254, 0.32936, 0.30564, 0.29185, 0.3644, 0.54327, 0.64036, 0.641, 0.58324, 0.58331, 0.75092, 0.80963, 0.80952, 0.45757, 0.45759, 0.46997, 0.49044, 0.38043, 0.32839, 0.33769, 0.29195, 0.29878, 0.28747, 0.28749, 0.25659, 0.17913, 0.17905, 0.24239, 0.24206, 0.22656, 0.16641, 0.23345, 0.26211, 0.13744, 0.16457, 0.25399, 0.31287, 0.33653, 0.68818, 0.67922, 0.58715, 0.61278, 0.61321, 0.6132, 0.62101, 0.58766, 0.72095, 0.63554, 0.63476, 0.55404, 0.55407, 0.54901, 0.24034, 0.23156, 0.29077, 0.18795, 0.18803, 0.18801, 0.14969], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pompes à chaleur": {
men: [0.49809, 0.556, 0.54208, 0.52354, 0.52326, 0.56863, 0.53845, 0.62516, 0.58072, 0.64202, 0.6419, 0.64198, 0.36778, 0.68931, 0.69044, 0.69037, 0.82678, 0.9591, 0.95931, 0.9621, 0.96276, 0.96267, 0.96285, 0.96363, 0.96363, 0.96354, 0.9639, 0.95634, 0.95439, 0.95471, 0.95946, 0.95917, 0.95959, 0.95663, 0.82536, 0.82581, 0.82494, 0.854, 0.85402, 0.85381, 0.3084, 0.29483, 0.30432, 0.35673, 0.32569, 0.32568, 0.31942, 0.30472, 0.3384, 0.32892, 0.32885, 0.31246, 0.31248, 0.28556, 0.41612, 0.40234, 0.4127, 0.29715, 0.30746, 0.30751, 0.3398, 0.37515, 0.24458, 0.25491, 0.19888, 0.19889, 0.19882, 0.24692, 0.19499, 0.1703, 0.15724, 0.18499, 0.27242, 0.28968, 0.27771, 0.31129, 0.36267, 0.42448, 0.58139, 0.62122, 0.56404, 0.56395, 0.5432, 0.61435, 0.69774, 0.76686, 0.7892, 0.78321, 0.78082, 0.76015, 0.72879, 0.7051, 0.53386, 0.47598, 0.5434, 0.54309, 0.55692, 0.58415, 0.55698, 0.31362, 0.3394, 0.33942, 0.29448, 0.22315, 0.21801, 0.20796, 0.28622, 0.26928, 0.26925, 0.34353], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rwe": {
men: [0.29632, 0.34169, 0.34166, 0.34166, 0.34147, 0.085239, 0.1533, 0.15332, 0.15337, 0.15333, 0.15331, 0.15333, 0.1534, 0.1536, 0.15385, 0.11936, 0.1194, 0.1194, 0.24089, 0.51895, 0.38362, 0.4464, 0.44648, 0.32926, 0.32926, 0.32923, 0.42651, 0.46854, 0.42388, 0.58928, 0.58921, 0.58903, 0.45465, 0.45472, 0.48624, 0.56676, 0.56616, 0.77954, 0.77956, 0.81743, 0.84766, 0.85215, 0.9162, 0.91566, 0.91814, 0.91812, 0.92158, 0.92102, 0.92514, 0.91805, 0.85467, 0.85534, 0.86351, 0.8636, 0.8392, 0.76854, 0.76885, 0.77805, 0.76048, 0.7606, 0.73622, 0.73627, 0.67668, 0.56144, 0.5856, 0.58563, 0.45844, 0.17648, 0.15759, 0.20239, 0.2023, 0, 0, 0, 0, 0, 0, 0.37505, 0.83817, 0.55856, 0.55877, 0.55869, 0.60755, 0.6075, 0.60758, 0.60749, 0.60754, 0.60749, 0.6073, 0.6064, 0.60659, 0.63722, 0.52941, 0.73072, 0.73071, 0.75968, 0.7601, 0.7597, 0.75964, 0.75871, 0.59966, 0.59969, 0.5998, 0.60061, 0.60023, 0.55527, 0.92652, 0.92694, 0.92684, 0.92608], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"parc éolien": {
men: [0.30421, 0.34672, 0.37109, 0.37108, 0.37088, 0.41484, 0.47412, 0.70665, 0.96578, 0.96241, 0.96224, 0.96235, 0.96475, 0.80201, 0.58025, 0.47996, 0.38874, 0.38875, 0.38884, 0.38892, 0.16959, 0.26338, 0.2936, 0.3567, 0.35671, 0.35667, 0.27009, 0.57371, 0.56424, 0.55158, 0.49309, 0.49294, 0.49316, 0.49323, 0.64562, 0.66014, 0.7153, 0.72741, 0.72742, 0.66195, 0.64853, 0.54971, 0.58493, 0.59792, 0.74174, 0.70499, 0.70484, 0.5425, 0.44045, 0.39765, 0.36615, 0.3465, 0.34652, 0.36871, 0.37479, 0.25184, 0.22775, 0.31023, 0.25613, 0.26236, 0.26239, 0.29303, 0.35731, 0.40024, 0.39, 0.34638, 0.36106, 0.29218, 0.28317, 0.42531, 0.45871, 0.32114, 0.38248, 0.38248, 0.38251, 0.3827, 0.31882, 0.27697, 0.33198, 0.34466, 0.32919, 0.41703, 0.41693, 0.40053, 0.39306, 0.39158, 0.40959, 0.40956, 0.38103, 0.38047, 0.75749, 0.82224, 0.81458, 0.84299, 0.84298, 0.8425, 0.84832, 0.86918, 0.8691, 0.84107, 0.81827, 0.81831, 0.9143, 0.92281, 0.90658, 0.86404, 0.84407, 0.8806, 0.83876, 0.74219], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éoliennes": {
men: [0.56618, 0.60424, 0.51198, 0.51699, 0.51265, 0.55104, 0.54156, 0.53839, 0.5331, 0.53231, 0.53222, 0.53228, 0.71316, 0.6497, 0.61113, 0.61894, 0.71029, 0.70885, 0.72548, 0.69581, 0.69105, 0.74249, 0.75873, 0.762, 0.77107, 0.771, 0.61527, 0.68806, 0.62489, 0.60567, 0.61, 0.60141, 0.59843, 0.61211, 0.57395, 0.48293, 0.47256, 0.46248, 0.40689, 0.39928, 0.3917, 0.37762, 0.43797, 0.43831, 0.45864, 0.40731, 0.40491, 0.38977, 0.4183, 0.44884, 0.45091, 0.45096, 0.46739, 0.45875, 0.48223, 0.42481, 0.3806, 0.40146, 0.38536, 0.43279, 0.42636, 0.4493, 0.49715, 0.48888, 0.43726, 0.42915, 0.43536, 0.41843, 0.40924, 0.42456, 0.48243, 0.45511, 0.46366, 0.45441, 0.48728, 0.45761, 0.42854, 0.49469, 0.56939, 0.57518, 0.57193, 0.61293, 0.59354, 0.6066, 0.58798, 0.60998, 0.60671, 0.60089, 0.58203, 0.5836, 0.58001, 0.52918, 0.5289, 0.53227, 0.51196, 0.56157, 0.54466, 0.57326, 0.53852, 0.43539, 0.359, 0.37334, 0.38381, 0.39851, 0.35159, 0.34707, 0.35022, 0.30726, 0.31006, 0.32022], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"éolien offshore": {
men: [0.53942, 0.53946, 0.53941, 0.5394, 0.53911, 0.7048, 0.70475, 0.66927, 0.66947, 0.9533, 0.95313, 0.95324, 0.95368, 0.95496, 0.95221, 0.95211, 0.95653, 0.95655, 0.95676, 0.94692, 0.94757, 0.31703, 0.50714, 0.57123, 0.57123, 0.57117, 0.57138, 0.54026, 0.5913, 0.5751, 0.5731, 0.56811, 0.56835, 0.57576, 0.57536, 0.60072, 0.58922, 0.61052, 0.61053, 0.60239, 0.60167, 0.69555, 0.63902, 0.65182, 0.71091, 0.41832, 0.40132, 0.19786, 0.18924, 0.27649, 0.30022, 0.26417, 0.26419, 0.26691, 0.26711, 0.25923, 0.22398, 0.23464, 0.20512, 0.21251, 0.21583, 0.3395, 0.38401, 0.27114, 0.18041, 0.25051, 0.26388, 0.26383, 0.25575, 0.40304, 0.45596, 0.43601, 0.47046, 0.47046, 0.47049, 0.47073, 0.43668, 0.49882, 0.3127, 0.27538, 0.269, 0.26896, 0.27316, 0.19627, 0.25176, 0.25172, 0.28403, 0.284, 0.28391, 0.2775, 0.26868, 0.17509, 0.49386, 0.84584, 0.62302, 0.50453, 0.50481, 0.54895, 0.54891, 0.62375, 0.56438, 0.5644, 0.56451, 0.55253, 0.55218, 0.55214, 0.44444, 0.34069, 0.41299, 0.50933], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies vertes": {
men: [0.48247, 0.4825, 0.5784, 0.62122, 0.62089, 0.62069, 0.56005, 0.65583, 0.63438, 0.69946, 0.71132, 0.7114, 0.70412, 0.77096, 0.77222, 0.80902, 0.85374, 0.85377, 0.75307, 0.47291, 0.47323, 0.4028, 0.3618, 0.3621, 0.33272, 0.33269, 0.33282, 0.25496, 0.21739, 0.14876, 0.15241, 0.15237, 0.15095, 0.20646, 0.20631, 0.17373, 0.23136, 0.23095, 0.23096, 0.2309, 0.30998, 0.50863, 0.7637, 0.77827, 0.51329, 0.51328, 0.59206, 0.50611, 0.47189, 0.47384, 0.42875, 0.42908, 0.42912, 0.42916, 0.45505, 0.40878, 0.40895, 0.39566, 0.48907, 0.47317, 0.41978, 0.42325, 0.35617, 0.38487, 0.4361, 0.43496, 0.43481, 0.43639, 0.36129, 0.40302, 0.38195, 0.37649, 0.38981, 0.39567, 0.35716, 0.37087, 0.35586, 0.38597, 0.38729, 0.39935, 0.3995, 0.39532, 0.44328, 0.44432, 0.46331, 0.46325, 0.43886, 0.43882, 0.58967, 0.61477, 0.62894, 0.42402, 0.41586, 0.3891, 0.3891, 0.39796, 0.34447, 0.42178, 0.49355, 0.50467, 0.52063, 0.52066, 0.49676, 0.52524, 0.58593, 0.65066, 0.62058, 0.71918, 0.71911, 0.71468], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biomasse": {
men: [0.21948, 0.15865, 0.23797, 0.23619, 0.23606, 0.40082, 0.4146, 0.34336, 0.34883, 0.33626, 0.3362, 0.33972, 0.33582, 0.31334, 0.35607, 0.42513, 0.40172, 0.40492, 0.4033, 0.17694, 0.15257, 0.26106, 0.22139, 0.19223, 0.19223, 0.19221, 0.16702, 0.20536, 0.39044, 0.37686, 0.38734, 0.38961, 0.39318, 0.34693, 0.36072, 0.51072, 0.60003, 0.62713, 0.62715, 0.62699, 0.69107, 0.67687, 0.56122, 0.63658, 0.69294, 0.69292, 0.69276, 0.71557, 0.69412, 0.53589, 0.46655, 0.47159, 0.44089, 0.46285, 0.44862, 0.43962, 0.46638, 0.39908, 0.35144, 0.35149, 0.38712, 0.4078, 0.41073, 0.454, 0.45209, 0.36951, 0.39883, 0.3545, 0.37592, 0.36946, 0.41541, 0.47211, 0.4945, 0.50687, 0.48683, 0.47175, 0.50629, 0.57477, 0.545, 0.62921, 0.62817, 0.64378, 0.65848, 0.7075, 0.7191, 0.71489, 0.73857, 0.72827, 0.7225, 0.68533, 0.69166, 0.66086, 0.72868, 0.703, 0.70299, 0.70844, 0.6607, 0.66913, 0.49194, 0.36275, 0.32174, 0.32289, 0.35195, 0.40648, 0.38458, 0.38385, 0.47646, 0.38305, 0.49726, 0.48896], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergies propres": {
men: [0.52073, 0.51831, 0.58595, 0.60338, 0.60384, 0.58867, 0.59029, 0.64663, 0.62535, 0.63681, 0.63669, 0.6608, 0.66048, 0.58404, 0.52407, 0.48827, 0.24628, 0.24217, 0.23917, 0.26315, 0.26333, 0.36143, 0.3615, 0.35921, 0.36351, 0.36347, 0.35687, 0.45787, 0.50645, 0.53366, 0.60464, 0.6915, 0.6918, 0.65375, 0.46544, 0.41563, 0.43884, 0.47083, 0.46776, 0.46764, 0.50796, 0.41568, 0.41592, 0.45331, 0.45269, 0.3529, 0.3336, 0.29001, 0.41225, 0.46267, 0.5041, 0.49768, 0.49772, 0.49777, 0.44093, 0.4867, 0.4869, 0.4532, 0.38359, 0.38365, 0.34288, 0.37574, 0.41132, 0.37631, 0.32898, 0.161, 0.15093, 0.1509, 0.15629, 0.15643, 0.16867, 0.15192, 0.15479, 0.14499, 0.32336, 0.37037, 0.43254, 0.58558, 0.57871, 0.57823, 0.59409, 0.594, 0.66526, 0.64436, 0.64192, 0.67869, 0.76152, 0.79406, 0.72862, 0.71803, 0.58765, 0.39227, 0.49196, 0.40549, 0.40549, 0.51963, 0.48044, 0.48855, 0.4739, 0.4347, 0.42639, 0.42641, 0.44884, 0.45907, 0.48334, 0.43842, 0.37838, 0.55481, 0.55475, 0.40534], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie solaire": {
men: [0.35547, 0.36251, 0.40618, 0.39381, 0.4143, 0.47559, 0.47129, 0.51108, 0.52104, 0.45801, 0.46752, 0.46757, 0.47689, 0.5055, 0.52335, 0.55887, 0.59705, 0.61304, 0.61884, 0.62593, 0.67101, 0.64017, 0.61895, 0.61945, 0.61895, 0.61889, 0.6602, 0.51007, 0.51357, 0.51265, 0.51259, 0.51825, 0.52179, 0.45982, 0.36625, 0.38349, 0.36074, 0.35233, 0.34339, 0.34331, 0.30774, 0.36799, 0.36688, 0.3412, 0.37697, 0.37188, 0.38786, 0.36092, 0.40531, 0.39909, 0.40168, 0.40447, 0.40673, 0.4046, 0.45341, 0.44377, 0.45807, 0.46853, 0.43415, 0.41345, 0.38102, 0.38093, 0.38239, 0.34598, 0.37916, 0.37665, 0.38418, 0.38718, 0.37953, 0.32554, 0.25424, 0.24618, 0.24295, 0.27602, 0.26886, 0.31128, 0.37254, 0.45735, 0.4457, 0.45721, 0.45625, 0.45618, 0.47904, 0.49142, 0.55325, 0.58317, 0.60349, 0.58109, 0.60121, 0.62124, 0.48784, 0.35777, 0.37994, 0.3677, 0.3677, 0.37187, 0.39835, 0.38501, 0.38862, 0.37467, 0.43586, 0.44927, 0.46174, 0.51464, 0.54445, 0.57444, 0.55977, 0.60051, 0.63979, 0.65484], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"photovoltaïque": {
men: [0.61553, 0.61339, 0.62875, 0.62403, 0.63579, 0.69847, 0.75993, 0.70474, 0.72361, 0.74995, 0.74981, 0.77579, 0.79898, 0.79617, 0.69687, 0.76683, 0.55803, 0.58952, 0.54181, 0.34645, 0.34668, 0.34665, 0.22844, 0.20322, 0.24009, 0.24007, 0.19977, 0.20825, 0.2199, 0.19506, 0.20434, 0.19406, 0.19414, 0.20928, 0.23514, 0.23341, 0.26971, 0.26429, 0.21448, 0.22134, 0.22837, 0.36828, 0.33484, 0.28571, 0.29861, 0.30137, 0.3013, 0.31278, 0.29815, 0.30194, 0.29962, 0.30639, 0.35183, 0.3468, 0.35677, 0.21736, 0.26177, 0.30906, 0.25392, 0.24953, 0.24469, 0.32207, 0.36383, 0.38122, 0.38951, 0.37579, 0.38524, 0.39558, 0.42621, 0.46046, 0.42476, 0.42949, 0.43004, 0.41653, 0.42211, 0.4195, 0.42177, 0.35024, 0.36707, 0.37177, 0.36363, 0.3567, 0.35401, 0.34845, 0.40912, 0.42593, 0.42964, 0.45847, 0.43542, 0.43824, 0.43631, 0.58704, 0.51953, 0.55272, 0.55271, 0.55576, 0.56893, 0.62781, 0.6144, 0.61924, 0.66434, 0.65105, 0.69033, 0.71984, 0.70706, 0.72679, 0.75833, 0.73654, 0.73646, 0.73421], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement des énergies renouvelables": {
men: [0.64055, 0.64059, 0.65686, 0.65685, 0.65649, 0.61937, 0.69453, 0.73958, 0.74769, 0.64364, 0.67621, 0.67629, 0.74477, 0.6099, 0.34134, 0.10855, 0.29249, 0.2925, 0.29257, 0.33873, 0.33896, 0.66809, 0.65527, 0.61364, 0.4167, 0.41666, 0.41682, 0.49529, 0.46471, 0.46854, 0.44575, 0.44562, 0.44581, 0.4187, 0.40391, 0.25103, 0.28295, 0.36534, 0.48838, 0.48826, 0.54452, 0.50943, 0.53394, 0.53467, 0.54134, 0.54133, 0.54121, 0.56026, 0.62223, 0.64579, 0.60052, 0.5885, 0.58854, 0.5886, 0.5881, 0.6029, 0.60315, 0.62427, 0.61766, 0.61775, 0.61783, 0.61787, 0.5812, 0.49126, 0.65657, 0.48683, 0.4279, 0.34269, 0.38569, 0.3955, 0.41583, 0.39006, 0.35797, 0.37703, 0.3791, 0.37929, 0.23223, 0.25581, 0.2424, 0.24829, 0.2558, 0.27012, 0.23537, 0.20713, 0.25856, 0.25852, 0.25922, 0.23638, 0.22811, 0.25928, 0.27146, 0.2644, 0.30576, 0.29747, 0.29746, 0.33428, 0.34452, 0.3172, 0.2596, 0.256, 0.26263, 0.28189, 0.28195, 0.27903, 0.41183, 0.36128, 0.30186, 0.33841, 0.33838, 0.24266], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins énergétiques": {
men: [0.18796, 0.20263, 0.20262, 0.20261, 0.2025, 0.22725, 0.1784, 0.1909, 0.19095, 0.19092, 0.21206, 0.21209, 0.36898, 0.74095, 0.73108, 0.731, 0.73126, 0.73128, 0.73144, 0.57947, 0.54443, 0.54438, 0.54448, 0.54492, 0.54493, 0.54487, 0.72771, 0.35051, 0.50006, 0.50023, 0.50017, 0.65953, 0.65982, 0.87376, 0.87316, 0.73875, 0.58408, 0.58305, 0.58307, 0.58292, 0.54037, 0.54008, 0.49373, 0.39744, 0.47077, 0.3068, 0.30673, 0.21376, 0.21372, 0.33714, 0.39075, 0.39106, 0.39109, 0.39113, 0.39143, 0.38075, 0.45147, 0.52197, 0.41573, 0.41579, 0.41584, 0.41587, 0.45404, 0.38836, 0.29092, 0.48586, 0.48569, 0.48561, 0.4856, 0.50841, 0.55196, 0.58676, 0.58687, 0.58687, 0.58691, 0.57272, 0.55192, 0.55168, 0.65392, 0.536, 0.53621, 0.54993, 0.46585, 0.46581, 0.40598, 0.40593, 0.40596, 0.40592, 0.41826, 0.2895, 0.26041, 0.26058, 0.29081, 0.22228, 0.22228, 0.19231, 0.22313, 0.20387, 0.11667, 0.11652, 0.11651, 0.11652, 0.094115, 0, 0.091005, 0.090999, 0.090945, 0.21148, 0.18476, 0.2522], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations éoliennes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9448, 0.94481, 0.94472, 0.94506, 0.94393, 0.94201, 0.94232, 0.94949, 0.9492, 0.94961, 0.94975, 0.95494, 0.95547, 0.9607, 0.95767, 0.95769, 0.95997, 0.95882, 0.96531, 0.96552, 0.96496, 0.963, 0.96298, 0.96276, 0.96218, 0.9609, 0.96228, 0.95987, 0.96063, 0.9607, 0.95935, 0.96009, 0.9468, 0.94719, 0.94719, 0.95262, 0.95276, 0.95287, 0.95428, 0.95329, 0.94575, 0.94641, 0.94645, 0.94613, 0.94597, 0.94594, 0.94681, 0.94637, 0.94685, 0.93524, 0.93524, 0.9353, 0, 0.95215, 0.95173, 0.95075, 0.94947, 0.94984, 0.94969, 0.94946, 0.94937, 0.94949, 0.94936, 0.94944, 0.94935, 0.94907, 0.94766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94769, 0.94813, 0.94803, 0.94852], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie photovoltaïque": {
men: [0.53011, 0.96628, 0.9662, 0.91399, 0.91383, 0.91354, 0.91348, 0.9136, 0.91387, 0.91369, 0.91353, 0.91364, 0.91181, 0.91303, 0.66829, 0.085836, 0.085866, 0.92051, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.73487, 0.73512, 0.73503, 0.73481, 0.84061, 0.66579, 0.66533, 0.7079, 0.70716, 0.70591, 0.70593, 0.75445, 0.35425, 0.31612, 0.25417, 0.25402, 0.25368, 0.25367, 0.15499, 0.16833, 0.1625, 0.10733, 0.10731, 0.10739, 0.1074, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42051, 0.42053, 0.42038, 0.42031, 0.85489, 0.87221, 0.87734, 0.73256, 0.67141, 0.67141, 0.67145, 0.67179, 0.73039, 0.76854, 0.71625, 0.71529, 0.71556, 0.71545, 0.67005, 0.62303, 0.59895, 0.78581, 0.94939, 0.9493, 0.94901, 0.95209, 0.95665, 0.81692, 0.80556, 0.84121, 0.8412, 0.84072, 0.83387, 0.83343, 0.84259, 0.84155, 0.8537, 0.85374, 0.8539, 0.83422, 0.72408, 0.95121, 0.95065, 0.94353, 0.94343, 0.94392], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"constructions de centrales": {
men: [0, 0, 0, 0, 0, 0.040839, 0.040836, 0.040842, 0.040854, 0.040846, 0.040839, 0.040844, 0.040862, 0.042972, 0.050985, 0.059698, 0.2056, 0.9475, 0.94771, 0.93893, 0.93957, 0.93949, 0.93966, 0.94043, 0.94043, 0.94034, 0.94069, 0.93955, 0.93764, 0.95199, 0.95188, 0.94915, 0.94956, 0.9497, 0.94904, 0.94957, 0.94857, 0.94689, 0.94692, 0.94668, 0.95106, 0.95054, 0.95075, 0.94244, 0.94116, 0.94113, 0.94092, 0.94035, 0.94019, 0.9398, 0.93959, 0.94033, 0.9404, 0.94049, 0, 0, 0, 0.58546, 0.58604, 0.58613, 0.5862, 0.54118, 0.54062, 0.51021, 0.51057, 0.48628, 0.54177, 0.54168, 0.54166, 0.54216, 0.54191, 0.41211, 0.41219, 0.41219, 0.41221, 0.53319, 0.53385, 0.68989, 0.68918, 0.93117, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15547, 0.15545, 0.23263, 0.23261, 0.23262, 0.27763, 0.27801, 0.93451, 0.93445, 0.9339, 0.93432, 0.93423, 0.93472], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie photovoltaïque": {
men: [0.87798, 0.87804, 0.88648, 0.88646, 0.86173, 0.93233, 0.93227, 0.88216, 0.88242, 0.84546, 0.84531, 0.84541, 0.71893, 0.7199, 0.72108, 0.721, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94636, 0.94444, 0.94475, 0.94464, 0.94436, 0.94477, 0.9449, 0.95367, 0.9542, 0.9532, 0.95151, 0.95154, 0.9513, 0.95016, 0.94526, 0.94547, 0.94491, 0.94363, 0.94361, 0.94339, 0.94282, 0, 0.94055, 0.94034, 0.48936, 0.4894, 0.48945, 0.48982, 0.75001, 0.75032, 0.75032, 0.75106, 0.75117, 0.75126, 0.75132, 0.75054, 0.68673, 0.68721, 0.95157, 0.95124, 0.95108, 0.95106, 0, 0, 0, 0, 0, 0, 0, 0.092159, 0.092118, 0.092023, 0.091899, 0.091935, 0.091921, 0.12236, 0.10432, 0.18168, 0.17143, 0.39234, 0.39231, 0.39219, 0.39161, 0.28361, 0.28379, 0.2838, 0.284, 0.28399, 0.28383, 0.25947, 0.53719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emplois verts": {
men: [0.20573, 0.22039, 0.24969, 0.24969, 0.24955, 0.071264, 0.042999, 0.037624, 0.043732, 0.043723, 0.043715, 0.04372, 0.020895, 0.020923, 0.020957, 0.020955, 0.10009, 0.10009, 0.10011, 0.082142, 0.089909, 0.22043, 0.22047, 0.22065, 0.22065, 0.22063, 0.52168, 0.52105, 0.51999, 0.52017, 0.33855, 0.33845, 0.33859, 0.4582, 0.80711, 0.65119, 0.65051, 0.64936, 0.27293, 0.27286, 0.18485, 0.12922, 0.12925, 0.12918, 0.2593, 0.2593, 0.25924, 0.16047, 0.38108, 0.38092, 0.34998, 0.35026, 0.43194, 0.43199, 0.53421, 0.77971, 0.78003, 0.78003, 0.64208, 0.64217, 0.64225, 0.74473, 0.7414, 0.74131, 0.80263, 0.80266, 0.80239, 0.80226, 0.80223, 0.82023, 0.76035, 0.74803, 0.73031, 0.73031, 0.7341, 0.65554, 0.55883, 0.47812, 0.47762, 0.47698, 0.47717, 0.50252, 0.5024, 0.47052, 0.50068, 0.46264, 0.45539, 0.45535, 0.41053, 0.76384, 0.76407, 0.95446, 0.77562, 0.77616, 0.77615, 0.75999, 0.76041, 0.7409, 0.72579, 0.74622, 0.74616, 0.76493, 0.76508, 0.48281, 0.4825, 0.52527, 0.6294, 0.62969, 0.62962, 0.40458], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cellules photovoltaïques": {
men: [0.52013, 0.7578, 0.95383, 0.79021, 0.78978, 0.78953, 0.78947, 0.78958, 0.68101, 0.84554, 0.84539, 0.84549, 0.82087, 0.82198, 0.82332, 0.82323, 0.79744, 0.95696, 0.95717, 0.78483, 0.78537, 0.7853, 0.78544, 0.63811, 0.78608, 0.6632, 0.4825, 0.52868, 0.5276, 0.55976, 0.55969, 0.55952, 0.55976, 0.52411, 0.52375, 0.52035, 0.41067, 0.35961, 0.18795, 0.21309, 0.28054, 0.30242, 0.30248, 0.20939, 0.20911, 0.2091, 0.20906, 0.20893, 0.20889, 0.20982, 0.25717, 0.28251, 0.28254, 0.28256, 0.30551, 0, 0.17539, 0.23875, 0.23899, 0.23902, 0.23905, 0.23907, 0.32306, 0.52032, 0.59302, 0.63009, 0.62987, 0.62977, 0.62975, 0.76107, 0.71942, 0.71979, 0.71992, 0.71992, 0.71997, 0.75338, 0.47004, 0.30987, 0.1462, 0.21996, 0.22005, 0.22002, 0.21996, 0.24623, 0.17468, 0.21936, 0.21938, 0.21936, 0.2193, 0.13228, 0.24105, 0.21032, 0.16127, 0.080269, 0.080268, 0.080222, 0.23554, 0.26533, 0.42883, 0.35082, 0.35079, 0.35081, 0.35088, 0.35135, 0.27122, 0.31672, 0.5264, 0.52664, 0.52658, 0.52686], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations photovoltaïques": {
men: [0.5727, 0.56926, 0.63175, 0.63173, 0.63139, 0.94814, 0.94595, 0.94236, 0.97035, 0.78671, 0.78657, 0.78666, 0.72894, 0.69528, 0.66061, 0.63523, 0.61402, 0.64798, 0.64812, 0.21057, 0.21072, 0.2107, 0.21074, 0.94908, 0.94909, 0.949, 0.95533, 0.25528, 0.14027, 0.14032, 0.1403, 0.099992, 0.10003, 0.10005, 0.16729, 0.15138, 0.21728, 0.2169, 0.2169, 0.21685, 0.14627, 0.16685, 0.2017, 0.17888, 0.17257, 0.1712, 0.17116, 0.18885, 0.16264, 0.15544, 0.12937, 0.12948, 0.12948, 0.1295, 0.14626, 0.1328, 0.11665, 0.11866, 0.23264, 0.27028, 0.28419, 0.2901, 0.42155, 0.77176, 0.75902, 0.69568, 0.69544, 0.69533, 0.72181, 0.69741, 0.68141, 0.68609, 0.66988, 0.67172, 0.67984, 0.662, 0.64014, 0.54146, 0.50553, 0.58294, 0.58317, 0.58308, 0.30332, 0.34632, 0.44898, 0.27518, 0.20429, 0.20427, 0.18533, 0.14229, 0.092512, 0.13716, 0.15819, 0.1583, 0.1583, 0.15821, 0.18281, 0.18271, 0.22494, 0.3094, 0.42569, 0.46001, 0.55138, 0.95577, 0.87928, 0.89617, 0.89564, 0.81803, 0.81794, 0.81837], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"électricité photovoltaïque": {
men: [0.91072, 0.89697, 0.80325, 0.80323, 0.83276, 0.84636, 0.78101, 0.77025, 0.61469, 0.49836, 0.49827, 0.49833, 0.47182, 0.41338, 0.37904, 0.379, 0.3524, 0.40323, 0.25369, 0.11731, 0.12989, 0.12988, 0.21074, 0.94908, 0.94909, 0.949, 0.18451, 0.12577, 0.14151, 0.15798, 0.15796, 0.1391, 0.13519, 0.13521, 0.15538, 0.13501, 0.16447, 0.16418, 0.17152, 0.18555, 0.1846, 0.30711, 0.31803, 0.30011, 0.32635, 0.32635, 0.33861, 0.3384, 0.30899, 0.39707, 0.34771, 0.34799, 0.33384, 0.31191, 0.42733, 0.21314, 0.24876, 0.22273, 0, 0, 0, 0, 0.42262, 0.59453, 0.56975, 0.56978, 0.56958, 0.56949, 0.56947, 0.69508, 0.64037, 0.63621, 0.6149, 0.56863, 0.52157, 0.56052, 0.52059, 0.30464, 0.26039, 0.2015, 0.20158, 0.20155, 0.27411, 0.43131, 0.45918, 0.48449, 0.49977, 0.54085, 0.59992, 0.56623, 0.52303, 0.43041, 0.439, 0.46299, 0.46298, 0.45497, 0.42246, 0.33962, 0.33959, 0.33917, 0.3564, 0.35642, 0.35649, 0.27443, 0.099827, 0.21643, 0.27906, 0.55713, 0.55708, 0.76596], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby nucléaire": {
men: [0, 0, 0, 0.94148, 0.94097, 0.94067, 0.94061, 0.94074, 0.94102, 0.43009, 0.43002, 0.43007, 0.43026, 0.43084, 0.43155, 0.4315, 0.33217, 0, 0.35046, 0.35053, 0.35077, 0.35074, 0.35081, 0.24045, 0.25473, 0.2547, 0.25479, 0.25449, 0.25397, 0.25405, 0.27542, 0.45874, 0.40088, 0.40094, 0.51407, 0.51435, 0.51381, 0.957, 0.95672, 0.95885, 0.9611, 0.96299, 0.9632, 0.96264, 0.96133, 0.95878, 0.95857, 0.95799, 0.95698, 0.95657, 0.95636, 0.95712, 0.95719, 0.9555, 0.95142, 0.94203, 0.94242, 0.94242, 0.94336, 0.94349, 0.94361, 0.94367, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.51282, 0.51213, 0.51233, 0.51225, 0.51213, 0.51208, 0.94132, 0.94118, 0.94127, 0.94118, 0.9409, 0.9395, 0.69745, 0.69791, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filières vertes": {
men: [0.52898, 0.52902, 0.52897, 0.52896, 0.52867, 0.5285, 0.75109, 0.95504, 0.95193, 0.95173, 0.95157, 0.95168, 0.95212, 0.95339, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31986, 0.41287, 0.4131, 0.41267, 0.41194, 0.41195, 0.41184, 0.41135, 0.41113, 0.41122, 0.93938, 0.9381, 0.93808, 0.93787, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95678, 0.95685, 0.95586, 0.95849, 0.95916, 0.9592, 0.95887, 0.95871, 0.95868, 0.95956, 0.95911, 0.9596, 0.95979, 0.95978, 0.94663, 0.94711, 0.94829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95151, 0.9518, 0.95242, 0.95245, 0.95311, 0.9531, 0.95256, 0.95309, 0.95259, 0.95251, 0.95134, 0.95126, 0.95131, 0.95149, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bilan énergétique": {
men: [0, 0, 0.93821, 0.93818, 0.93767, 0.95178, 0.95172, 0.95185, 0.95213, 0.95194, 0.95178, 0.95189, 0.95233, 0.9536, 0.95516, 0.95506, 0.95306, 0.95309, 0.9533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11785, 0.34363, 0.34327, 0.34266, 0.58904, 0.58889, 0.269, 0.26885, 0.33306, 0.33286, 0.36112, 0.36111, 0.36103, 0.37874, 0.3883, 0.33231, 0.43009, 0.43042, 0.43046, 0.4305, 0.95148, 0.95155, 0.94889, 0.94888, 0.51611, 0.51619, 0.51625, 0.4732, 0.47271, 0.47265, 0, 0, 0.058395, 0.045234, 0.045233, 0.045274, 0.045253, 0.042424, 0.079911, 0.31721, 0.31724, 0.20131, 0.34185, 0.42545, 0.42501, 0.44016, 0.48491, 0.56131, 0.401, 0.40096, 0.40101, 0.41491, 0.41495, 0.34697, 0.37286, 0.49724, 0.37606, 0.16419, 0.1642, 0.062462, 0.062462, 0.062426, 0.49134, 0.49108, 0.7118, 0.71093, 0.71087, 0.71091, 0.70058, 0.70153, 0.46724, 0.50482, 0.53323, 0.57967, 0.57961, 0.57991], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 