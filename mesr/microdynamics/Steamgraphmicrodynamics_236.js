var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"semences locales": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94663, 0.94649, 0.94746, 0.94749, 0.94628, 0.94589, 0.94409, 0.94873, 0.94846, 0.75426, 0.75455, 0.75462, 0.7533, 0.75309, 0.74484, 0.7449, 0.74477, 0.80047, 0.80082, 0.80041, 0.80096, 0.78982, 0.78991, 0.95074, 0.94983, 0.94959, 0.95147, 0.95134, 0.94944, 0.94944, 0.94968, 0.9447, 0.94159, 0.94097, 0.94067, 0.93974, 0.93938, 0.71501, 0.7152, 0.714, 0.71313, 0.71301, 0.60121, 0.60095, 0.60081, 0.60085, 0.27218, 0.27218, 0.27208, 0.30646, 0.30639, 0.36129, 0.3613, 0.36176, 0.36202, 0.36225, 0.47927, 0.47949, 0.47969, 0.47951, 0.94166, 0.94223, 0.94219, 0.94124, 0.9406, 0.94091, 0.94088, 0.94127, 0.94206, 0.94193, 0.94418, 0.94409, 0.94411, 0.94464, 0.94472, 0.94519, 0.94686, 0.14327, 0.086476, 0.086488, 0.086569, 0.086576, 0.086518, 0.086545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"millénaire pour le développement": {
men: [0.22187, 0.20438, 0.20998, 0.20304, 0.20307, 0.20383, 0.20389, 0.24926, 0.24945, 0.22071, 0.22066, 0.22063, 0.30232, 0.33823, 0.33795, 0.51007, 0.62152, 0.64382, 0.64385, 0.68986, 0.68957, 0.60802, 0.60651, 0.60634, 0.6062, 0.60644, 0.66854, 0.71673, 0.65347, 0.52694, 0.52699, 0.52689, 0.52688, 0.52711, 0.52684, 0.69622, 0.69691, 0.69699, 0.69717, 0.6965, 0.7781, 0.70886, 0.85528, 0.95874, 0.95873, 0.96109, 0.9607, 0.96166, 0.50509, 0.45542, 0.53536, 0.57144, 0.48265, 0.44282, 0.51208, 0.55355, 0.52201, 0.53345, 0.51625, 0.51829, 0.51664, 0.51251, 0.52669, 0.53481, 0.51271, 0.51158, 0.52707, 0.5425, 0.51807, 0.44383, 0.48184, 0.32606, 0.39206, 0.3396, 0.35152, 0.32668, 0.33067, 0.25989, 0.41033, 0.24704, 0.24712, 0.21628, 0.20724, 0.24814, 0.22684, 0.26434, 0.26432, 0.26432, 0.21298, 0.22227, 0.14928, 0.14954, 0.14967, 0.11551, 0.11553, 0.086026, 0.1311, 0.1428, 0.090695, 0.090734, 0.090771, 0.090745, 0.099897, 0.099892, 0.09949, 0.099481, 0.099466, 0.1149, 0.11492, 0.15003], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"objectifs du millénaire": {
men: [0.75615, 0.55705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94965, 0.95334, 0.95571, 0.95579, 0.95412, 0.95385, 0.95382, 0.9539, 0.95373, 0.95372, 0.95414, 0.95923, 0.96053, 0.96149, 0.95844, 0.95657, 0.95387, 0.95363, 0.9591, 0.95897, 0.96202, 0.96201, 0.96226, 0.96187, 0.67757, 0.68784, 0.77605, 0.83314, 0.84788, 0.84775, 0.76893, 0.49038, 0.50982, 0.51819, 0.50138, 0.51019, 0.51406, 0.51644, 0.5309, 0.52799, 0.51293, 0.49286, 0.48399, 0.46812, 0.46745, 0.58673, 0.57261, 0.55004, 0.65029, 0.58623, 0.54802, 0.52115, 0.46999, 0.29979, 0.2652, 0.22734, 0.19169, 0.53219, 0.58254, 0.58278, 0.58327, 0.49848, 0.4987, 0.57103, 0.57104, 0.57136, 0.57141, 0.57169, 0.43978, 0.5082, 0.63708, 0.53347, 0.41963, 0.41967, 0.41938, 0.41952, 0.41969, 0.15909, 0.15905, 0.15897, 0.15897, 0.15833, 0.4163, 0.41624, 0.41582, 0.41592, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés rurales": {
men: [0.96481, 0.96681, 0.96728, 0.96627, 0.9664, 0.96684, 0.96712, 0.96849, 0.96741, 0.96742, 0.96722, 0.95783, 0.95773, 0.95833, 0.95754, 0.95194, 0.9518, 0.95278, 0.95281, 0.95159, 0.95119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25745, 0.25751, 0.25727, 0.2572, 0.25771, 0.25768, 0.25749, 0.25748, 0.25755, 0.25745, 0.2566, 0.40795, 0.94152, 0.59926, 0.51338, 0.5133, 0.51344, 0.51258, 0.51195, 0.51186, 0.51174, 0.51151, 0.51139, 0.565, 0.56578, 0.48261, 0.19137, 0.21196, 0.082499, 0.082485, 0.082487, 0.082591, 0.082652, 0.082703, 0.082735, 0.070608, 0.070637, 0, 0, 0, 0.36284, 0.36269, 0.36244, 0.36256, 0.36255, 0.3627, 0.363, 0.36295, 0.36312, 0.93522, 0.93523, 0.93576, 0.93584, 0.93631, 0.93743, 0.93824, 0.30165, 0.3017, 0.30198, 0.302, 0.3018, 0.30189, 0.30202, 0.30214, 0.30206, 0.30192, 0.3019, 0.097493, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement agricole": {
men: [0.064591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.016031, 0.015002, 0.01499, 0.032434, 0.032429, 0.032462, 0.032463, 0.032422, 0.047916, 0.076448, 0.11495, 0.25571, 0.24394, 0.24404, 0.18323, 0.45248, 0.45235, 0.44027, 0.4403, 0.44022, 0.52989, 0.53012, 0.52985, 0.52095, 0.50051, 0.50057, 0.56074, 0.5602, 0.56006, 0.26893, 0.18331, 0.16502, 0.16502, 0.16506, 0.10831, 0.10795, 0.10788, 0.23053, 0.2259, 0.22581, 0.30573, 0.39185, 0.39119, 0.56686, 0.95128, 0.95015, 0.94973, 0.94951, 0.95042, 0.95174, 0.95174, 0.95273, 0.66994, 0.65628, 0.6079, 0.50991, 0.51056, 0.51093, 0.51125, 0.60328, 0.634, 0.63427, 0.61514, 0.61536, 0.61573, 0.44092, 0.73379, 0.7699, 0.77015, 0.77013, 0.69199, 0.69257, 0.69247, 0.62535, 0.53327, 0.53328, 0.53358, 0.53363, 0.53389, 0.78719, 0.71963, 0.72081, 0.7209, 0.72158, 0.53064, 0.53029, 0.53045, 0.33374, 0.33388, 0.33378, 0.55384, 0.55381, 0.41358, 0.30161, 0.30157, 0.30127, 0.30134, 0.30118], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé maternelle": {
men: [0.14256, 0.12253, 0.12259, 0.12246, 0.12248, 0.12984, 0.13888, 0.086869, 0.086936, 0.093131, 0.093112, 0.11841, 0, 0, 0.13327, 0.29791, 0.29786, 0.29817, 0.29818, 0.2978, 0.29767, 0.96095, 0.86169, 0.86145, 0.86757, 0.86791, 0.6113, 0.61024, 0.47704, 0.096155, 0.096163, 0.096146, 0.096145, 0.096187, 0.096138, 0.19864, 0.40881, 0.40885, 0.36103, 0.36069, 0.96242, 0.96432, 0.96419, 0.96525, 0.96524, 0.96548, 0.96509, 0.96192, 0.96361, 0.9642, 0.94287, 0.94452, 0.95096, 0.9175, 0.92241, 0.90358, 0.90466, 0.88286, 0.88247, 0.88355, 0.88456, 0.88579, 0.88236, 0.87981, 0.87927, 0.87739, 0.86968, 0.8753, 0.78794, 0.65864, 0.58727, 0.94434, 0.94477, 0.93724, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduire la mortalité": {
men: [0.95769, 0.14737, 0.14744, 0.14729, 0.14239, 0.13216, 0.12904, 0.094114, 0.094187, 0.094187, 0.094168, 0.094155, 0, 0, 0, 0.17661, 0.17658, 0.17676, 0.1844, 0.20481, 0.2128, 0.54679, 0.54543, 0.54528, 0.54515, 0.54536, 0.62056, 0.52986, 0.52258, 0, 0, 0, 0, 0, 0, 0.077206, 0.077283, 0.077292, 0.077311, 0.077238, 0.57079, 0.631, 0.69259, 0.69208, 0.69207, 0.69225, 0.69197, 0.81861, 0.84075, 0.96103, 0.9606, 0.96023, 0.74652, 0.79229, 0.83058, 0.84401, 0.65126, 0.6511, 0.65081, 0.65546, 0.65905, 0.65997, 0.65298, 0.64459, 0.645, 0.64358, 0.67173, 0.65535, 0.41832, 0.082203, 0.35377, 0.2577, 0.15901, 0.075153, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pnud": {
men: [0.044318, 0.061234, 0.096789, 0.096688, 0.096701, 0.096745, 0.080118, 0.064351, 0.12818, 0.14657, 0.26148, 0.26144, 0.40725, 0.40751, 0.34754, 0.3358, 0.3406, 0.33454, 0.33455, 0.32157, 0.36024, 0.5117, 0.45318, 0.50153, 0.432, 0.3973, 0.16848, 0.16818, 0.21155, 0.23451, 0.23453, 0.249, 0.249, 0.28587, 0.28572, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27121, 0.25544, 0.25527, 0.45462, 0.45442, 0.40246, 0.43761, 0.48052, 0.56054, 0.4177, 0.45597, 0.54166, 0.54019, 0.55427, 0.50005, 0.53198, 0.53198, 0.43094, 0.42095, 0.50565, 0.50557, 0.47749, 0.43559, 0.83019, 0.80927, 0.78294, 0.78193, 0.74217, 0.7419, 0.67672, 0.67713, 0.6771, 0.80172, 0.61724, 0.61745, 0.47789, 0.47809, 0.47849, 0.47842, 0, 0, 0, 0, 0, 0.20228, 0.20264, 0.27773, 0.33344, 0.33349, 0.3338, 0.37752, 0.33654, 0.33664, 0.24217, 0.17355, 0.1735, 0.19212, 0.19211, 0.14764, 0.17548, 0.12836, 0.084762, 0.084782, 0.074514], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25753, 0.93241, 0.93282, 0.93234, 0.93298, 0.93391, 0.93401, 0.93425, 0.93336, 0.93312, 0.93497, 0.93484, 0.93416, 0.93415, 0, 0, 0, 0.59307, 0.59289, 0.59262, 0.59239, 0.53115, 0.53129, 0.5304, 0.52975, 0.52966, 0.52953, 0.5293, 0.52917, 0.26717, 0.32225, 0, 0, 0, 0.16843, 0.30212, 0.30213, 0.30251, 0.30273, 0.30292, 0.30304, 0.30318, 0.3033, 0.58151, 0.58172, 0.46961, 0.4696, 0.58821, 0.52929, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3312, 0.3315, 0.95316, 0.33131, 0.33141, 0.33155, 0.33169, 0.33159, 0.28234, 0.28232, 0.28119, 0.28116, 0.52509, 0.52456, 0.4209, 0.42067], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mortalité infantile": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0080844, 0.0082846, 0.0082018, 0.019791, 0.019989, 0.028336, 0.029882, 0.092267, 0.11709, 0.11709, 0.11725, 0.1172, 0.28927, 0.28855, 0.45154, 0.40751, 0.48677, 0.39666, 0.21886, 0.22412, 0.24284, 0.16595, 0.15557, 0.15557, 0.15668, 0.17682, 0.24011, 0.31993, 0.2977, 0.28231, 0.27367, 0.28412, 0.3708, 0.3529, 0.35625, 0.41507, 0.43098, 0.43081, 0.39857, 0.41366, 0.32728, 0.26202, 0.35062, 0.44541, 0.45624, 0.52081, 0.54015, 0.5167, 0.51554, 0.51035, 0.53659, 0.53663, 0.55525, 0.58048, 0.58926, 0.55988, 0.54186, 0.52575, 0.53199, 0.51342, 0.45548, 0.53101, 0.54815, 0.52112, 0.36365, 0.36352, 0.42795, 0.37285, 0.33067, 0.42629, 0.43178, 0.43192, 0.42238, 0.47888, 0.50652, 0.48205, 0.48226, 0.57688, 0.54982, 0.51581, 0.42944, 0.12676, 0.071231, 0.066957, 0.035686, 0.03126, 0.03104, 0.011387, 0.011442, 0.028314, 0.02674, 0.04569, 0.045508, 0.04592, 0.056077, 0.082225, 0.12103, 0.12597, 0.14692, 0.21551, 0.21773], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"propriété collective": {
men: [0.47738, 0.26331, 0.35402, 0.35365, 0.3537, 0.35386, 0.31144, 0.43624, 0.50935, 0.75038, 0.75023, 0.62182, 0.62175, 0.461, 0.46062, 0.46055, 0.30207, 0.30238, 0.3024, 0.30201, 0.4551, 0.45424, 0.61826, 0.43004, 0.42993, 0.4301, 0.43014, 0.56454, 0.56438, 0.56437, 0.56441, 0.56431, 0.5643, 0.56455, 0.36062, 0.25091, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19626, 0.19621, 0.19613, 0.19608, 0.19609, 0.044869, 0.044869, 0.044853, 0.048144, 0.083687, 0.076831, 0.076832, 0.080606, 0.080665, 0.037369, 0.095769, 0.092904, 0.092943, 0.092908, 0.44103, 0.44129, 0.58457, 0.58433, 0.53113, 0.78017, 0.78014, 0.63237, 0.6329, 0.63281, 0.10314, 0.1943, 0.19431, 0.19442, 0.19443, 0.19453, 0.10782, 0.10792, 0.10809, 0.10811, 0.10821, 0.11478, 0.1147, 0.11473, 0.94696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés indigènes": {
men: [0.55712, 0.73595, 0.73631, 0.73553, 0.65783, 0.59757, 0.56582, 0.53389, 0.58966, 0.53341, 0.44384, 0.30956, 0.30953, 0.28458, 0, 0, 0, 0, 0, 0, 0, 0.15941, 0.15901, 0.14568, 0.14565, 0.1457, 0.14572, 0.1557, 0.17312, 0.17312, 0.28251, 0.28246, 0.28245, 0.28258, 0.28243, 0.09569, 0.095785, 0.2434, 0.24346, 0.24323, 0.24317, 0.24365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.082991, 0.069645, 0.069664, 0.069547, 0.069462, 0.06945, 0.069433, 0.057157, 0.057144, 0.057148, 0.052338, 0.052338, 0.06703, 0.11358, 0, 0, 0.19417, 0.19442, 0.19456, 0.19468, 0.19475, 0.34259, 0.34274, 0.34261, 0.26755, 0.26771, 0.2677, 0.26759, 0.26741, 0.3277, 0, 0, 0, 0, 0.6323, 0.63224, 0.63225, 0.6326, 0.85908, 0.85951, 0.86103, 0.79555, 0.79685, 0.79696, 0.7977, 0.79777, 0.79724, 0.88332, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets humains": {
men: [0.62168, 0.62183, 0.62213, 0.62148, 0.62156, 0.27999, 0.28007, 0.33208, 0.33233, 0.33233, 0.33226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93637, 0.93636, 0.9366, 0.93622, 0.93314, 0.93252, 0.93223, 0.93181, 0.17622, 0.17619, 0.17624, 0.17594, 0.17573, 0.1757, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93458, 0.9342, 0.93356, 0.93387, 0.93384, 0.93423, 0.93501, 0.93488, 0.9353, 0.93522, 0.93523, 0.93576, 0.93584, 0.93631, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie chinoise": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.82953, 0.82795, 0.8259, 0.70173, 0.63252, 0.63277, 0.63282, 0.63172, 0.63154, 0.58083, 0.58088, 0.58077, 0.58077, 0.51548, 0, 0.024922, 0.024947, 0.020793, 0.02286, 0.020593, 0.020587, 0.020628, 0.020625, 0.01876, 0.016972, 0.016977, 0.01697, 0.020032, 0.022746, 0, 0, 0, 0, 0, 0, 0, 0.13996, 0.24559, 0.41442, 0.41432, 0.41435, 0.41493, 0.41493, 0.41478, 0.93711, 0.94572, 0.94557, 0.94558, 0.94678, 0.94748, 0.94336, 0.94373, 0.94416, 0.52199, 0.5218, 0.52199, 0.28171, 0.2817, 0.28158, 0, 0, 0, 0, 0, 0, 0, 0.073656, 0.076184, 0.076227, 0.071548, 0.076272, 0.076406, 0.082128, 0.094455, 0.094468, 0.10652, 0.10653, 0.10646, 0.12174, 0.29886, 0.094945, 0.094918, 0.094874, 0.12656, 0.12606, 0.12604, 0.045269, 0.045224, 0.045234, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie agricole": {
men: [0.71179, 0.71196, 0.71231, 0.71156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2239, 0.22386, 0.36395, 0.4601, 0.46011, 0.45952, 0.45933, 0.94631, 0.94396, 0.94369, 0.94347, 0.94384, 0.94392, 0.94228, 0.93819, 0.93817, 0.93177, 0, 0, 0, 0, 0, 0, 0.95065, 0.95089, 0.94999, 0.94975, 0.95163, 0.53918, 0.1896, 0.1896, 0.18965, 0.18957, 0.18895, 0.18882, 0.18876, 0.18868, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20236, 0.20238, 0.1144, 0.1146, 0.085079, 0.085218, 0.085229, 0.085309, 0.085316, 0.085259, 0.085285, 0.085322, 0.085356, 0.085332, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins fondamentaux": {
men: [0.34269, 0.44509, 0.44531, 0.44485, 0.4449, 0.44511, 0.44524, 0.51054, 0.51094, 0.96177, 0.96145, 0.96131, 0.96534, 0.96594, 0.96515, 0.96244, 0.96229, 0.96328, 0.96331, 0.96208, 0.96168, 0.95985, 0.95747, 0.9572, 0.94945, 0.62269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.023233, 0.023256, 0.023258, 0.023264, 0.018777, 0.021089, 0.021131, 0.021128, 0.018077, 0.020618, 0.020623, 0.022061, 0.03038, 0.039112, 0, 0, 0, 0, 0, 0.1294, 0.12924, 0.12922, 0.14449, 0.12006, 0.12003, 0.12004, 0.1202, 0.1202, 0.076106, 0.11511, 0.094391, 0.094375, 0.094377, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23154], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sociale": {
men: [0.46249, 0.4626, 0.46283, 0.46234, 0.55742, 0.70612, 0.70632, 0.95764, 0.95837, 0.95838, 0.95818, 0.95804, 0.95795, 0.95854, 0.95379, 0.95363, 0.95349, 0.95447, 0.95176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0177, 0.016562, 0.016558, 0.016209, 0.016231, 0.016231, 0.016225, 0.017175, 0.017171, 0.16035, 0.16036, 0.16056, 0.16068, 0.16078, 0, 0, 0.30698, 0.92556, 0.92589, 0.92646, 0.12224, 0.023849, 0.11583, 0.11587, 0.11587, 0.085006, 0.085078, 0.085066, 0.085104, 0.085096, 0.070121, 0.07016, 0.051097, 0.048094, 0.052252, 0.087384, 0.075564, 0.075575, 0.075645, 0.11487, 0.11479, 0.090034, 0.090072, 0.090109, 0.090083, 0.090041, 0.20427, 0.17872, 0.13669, 0.13667, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0.70755, 0.70771, 0.70806, 0.55475, 0.55482, 0.55508, 0.55524, 0.55493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063051, 0.11078, 0.93254, 0.93278, 0.93189, 0.93165, 0.93349, 0.29437, 0.29415, 0.29415, 0.29423, 0.29411, 0.29314, 0.064974, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31565, 0.31605, 0.47354, 0.94242, 0.94279, 0.47424, 0.56625, 0.56604, 0.56625, 0.56659, 0.56657, 0.56633, 0.56595, 0.56614, 0.30152, 0.30164, 0.3019, 0.30185, 0.30199, 0.93767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement humain": {
men: [0, 0, 0.07528, 0.075201, 0.075211, 0.075246, 0.075267, 0.092371, 0.20974, 0.26864, 0.28805, 0.2617, 0.47682, 0.54115, 0.54803, 0.5164, 0.50412, 0.50464, 0.50466, 0.44104, 0.44085, 0.46929, 0.501, 0.5099, 0.50978, 0.54202, 0.28041, 0.27992, 0.16788, 0.18493, 0.15078, 0.15075, 0.13383, 0.16282, 0.12497, 0.056301, 0, 0, 0, 0, 0.054919, 0.10764, 0.11575, 0.11566, 0.11122, 0.11125, 0.12115, 0.12076, 0.14507, 0.14503, 0.13434, 0.10799, 0.10798, 0.18415, 0.1782, 0.25984, 0.24154, 0.24148, 0.28923, 0.28916, 0.28918, 0.30569, 0.35086, 0.29594, 0.27757, 0.3142, 0.31415, 0.28227, 0.31719, 0.22416, 0.25441, 0.20728, 0.17677, 0.17446, 0.1744, 0.13247, 0.088159, 0.1148, 0.13025, 0.10404, 0.083682, 0.059099, 0.059123, 0, 0, 0, 0.09367, 0.095886, 0.073172, 0.083657, 0.09608, 0.14334, 0.16714, 0.17416, 0.26348, 0.26373, 0.26375, 0.38386, 0.38398, 0.25713, 0.11429, 0.11426, 0.13605, 0.13604, 0.11041, 0.11192, 0.097866, 0.10235, 0.099536, 0.099483], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pc. des ressources": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038792, 0.047917, 0.15382, 0.21445, 0.32845, 0.32803, 0.32789, 0.41564, 0.41461, 0.33076, 0.38215, 0.59873, 0.59878, 0.59774, 0.50317, 0.50315, 0.34141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94625, 0.94584, 0.94561, 0.94568, 0.76917, 0.8063, 0.80601, 0.80652, 0.80633, 0.8062, 0.80622, 0.80724, 0.80783, 0.80833, 0.63032, 0.63061, 0.63087, 0.63064, 0.94092, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.040722, 0.064709, 0.081094, 0.12832, 0.12832, 0.22234, 0.43202, 0.27796, 0.27824, 0.27827, 0.27834, 0.27807, 0.278, 0.27855, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92783, 0.92825, 0.92864, 0.9283, 0.92864, 0.9292, 0.92916, 0.92878, 0.92815, 0.92846, 0.92843, 0.92881, 0.92959, 0.92946, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076856, 0.076804, 0.076828, 0.10197, 0.10201, 0.10198, 0.10194, 0.10193, 0.3385, 0.33847, 0.94212, 0.94119, 0.94141, 0.9409], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tourisme vert": {
men: [0.079927, 0.079946, 0.090763, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50644, 0.50646, 0.50581, 0.948, 0.9462, 0.94385, 0.94358, 0.94336, 0.94373, 0.9438, 0.94216, 0.94189, 0.3425, 0.34253, 0, 0, 0, 0, 0, 0, 0, 0.35974, 0.3594, 0.35931, 0.36002, 0.35997, 0.94423, 0.94422, 0.94446, 0.94408, 0.94097, 0.94035, 0.94005, 0.93963, 0.93927, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophes climatiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10953, 0.068658, 0.044709, 0.044701, 0.0447, 0.02854, 0.028526, 0.058223, 0.058281, 0.098233, 0.098258, 0.098164, 0.078456, 0.088787, 0.070594, 0.069781, 0.087399, 0.075764, 0.063159, 0.089489, 0.08943, 0.054679, 0.052429, 0, 0.042359, 0.042371, 0.054284, 0.025415, 0.02541, 0.025743, 0.025732, 0.027582, 0.030914, 0.030957, 0.030957, 0.029142, 0.029745, 0.037506, 0, 0.020854, 0.02088, 0.10351, 0.073135, 0.18542, 0.1855, 0.18558, 0.16285, 0.19635, 0.19646, 0.22081, 0.18626, 0.15112, 0.15117, 0.13051, 0.15803, 0.15816, 0.17428, 0.15764, 0.15763, 0.15763, 0.16313, 0.14591, 0.14599, 0.14624, 0.22183, 0.94526, 0.94539, 0.94627, 0.9382, 0.93756, 0.93786, 0.93825, 0.93864, 0.93836, 0.94894, 0.94995, 0.94613, 0.94604, 0.7178, 0.71709, 0.71725, 0.71687], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités mexicaines": {
men: [0.94142, 0.94164, 0.9421, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93872, 0.93834, 0.94301, 0.94066, 0.9404, 0.94017, 0.94054, 0.94062, 0.93899, 0.93872, 0.93869, 0.93877, 0.9386, 0.93859, 0.93246, 0.93198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071084, 0.071089, 0.071188, 0.071188, 0.10033, 0.1658, 0.20966, 0.32408, 0.32409, 0.3245, 0.32474, 0.32494, 0.32506, 0.25976, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations sanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39318, 0.3922, 0.39209, 0.392, 0.39215, 0.39218, 0.3915, 0.39139, 0.19864, 0.22465, 0.22461, 0.22461, 0.2247, 0.22459, 0, 0, 0, 0, 0, 0, 0.26472, 0.26469, 0.94671, 0.9467, 0.94695, 0.94656, 0.94345, 0.94282, 0.94252, 0.9421, 0.94174, 0.9416, 0.94185, 0.94027, 0, 0, 0, 0.17261, 0.20035, 0.20037, 0.20065, 0.20065, 0.18222, 0.18234, 0.18229, 0.18226, 0.18227, 0.1825, 0.64021, 0.6406, 0.64085, 0.24331, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté chrétienne": {
men: [0.50506, 0.95984, 0.96031, 0.9593, 0.95943, 0.95987, 0.96014, 0.95961, 0.96034, 0.96035, 0.96015, 0.96001, 0.95992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13686, 0.34584, 0.34585, 0.4063, 0.4066, 0.36487, 0.5209, 0.52114, 0.52135, 0.52116, 0.52135, 0.52167, 0.35377, 0.36303, 0.38311, 0.26365, 0.26364, 0.17938, 0.17953, 0.08602, 0.1331, 0.12676, 0.084315, 0.084362, 0.084369, 0.084411, 0.093425, 0.042053, 0.042122, 0.042127, 0.042167, 0.043641, 0.043611, 0.080816, 0, 0, 0, 0, 0, 0, 0, 0.0089188, 0.0081834, 0.0079905, 0.0076636], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement soutenable": {
men: [0.58653, 0.58667, 0.58695, 0.58634, 0.58642, 0.39354, 0.94834, 0.94781, 0.9541, 0.94637, 0.94618, 0.94604, 0.94595, 0.94653, 0.087978, 0.087964, 0.08795, 0.088041, 0.088044, 0.087931, 0.087894, 0.087727, 0, 0, 0, 0, 0, 0, 0.072714, 0.063877, 0.052738, 0.052729, 0.052728, 0.052751, 0.052724, 0.052761, 0.052813, 0.15944, 0.15948, 0.15933, 0.075814, 0.075964, 0, 0, 0, 0, 0, 0, 0, 0, 0.10506, 0.13833, 0.12236, 0.12239, 0.161, 0.085829, 0.085814, 0.12449, 0.12444, 0.12441, 0.13423, 0.11867, 0.11867, 0.11863, 0.034652, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94593, 0.94681, 0.9469, 0.94626, 0.32269, 0.32283, 0.32296, 0.14441, 0.14434, 0.14433, 0.14375, 0.14374, 0.14372, 0.10713, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"accidents graves": {
men: [0, 0, 0, 0.068602, 0.068611, 0.19663, 0.19668, 0.19657, 0.19672, 0.19672, 0.22372, 0.22369, 0.22367, 0.22381, 0.17596, 0.19692, 0.25072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19716, 0.33534, 0.42248, 0.22059, 0.26404, 0.26392, 0.30921, 0.30923, 0.24206, 0.24205, 0.24197, 0.24212, 0.24207, 0.24203, 0.096348, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94921, 0.94882, 0.94818, 0.94849, 0.94846, 0.94885, 0.94965, 0.94951, 0.94994, 0.94986, 0.94987, 0.9504, 0.95049, 0.95096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"population mondiale": {
men: [0, 0, 0, 0, 0, 0, 0.025137, 0.040507, 0.10268, 0.099086, 0.12529, 0.12118, 0.17995, 0.18203, 0.18881, 0.18873, 0.1654, 0.173, 0.17628, 0.13069, 0.15841, 0.19148, 0.16816, 0.16462, 0.14682, 0.14475, 0.117, 0.11466, 0.10152, 0.10155, 0.10784, 0.10002, 0.10002, 0.14463, 0.091905, 0.037412, 0.032725, 0.033353, 0.035915, 0.037902, 0.040942, 0.041683, 0.047253, 0.090558, 0.086317, 0.086503, 0.086468, 0.066025, 0.079091, 0.097335, 0.11589, 0.15311, 0.145, 0.14504, 0.22357, 0.18375, 0.21314, 0.19409, 0.18827, 0.18922, 0.18794, 0.21314, 0.20742, 0.19912, 0.20025, 0.17711, 0.17931, 0.17636, 0.12458, 0.13201, 0.079297, 0.2053, 0.27982, 0.28294, 0.28589, 0.29719, 0.31536, 0.42277, 0.42647, 0.5281, 0.57936, 0.62329, 0.62299, 0.67537, 0.6686, 0.58191, 0.51277, 0.50205, 0.48868, 0.4654, 0.32912, 0.21169, 0.20889, 0.15032, 0.091503, 0.070934, 0.060371, 0.038212, 0.039769, 0.039328, 0.036926, 0.036779, 0.036384, 0.036171, 0.06175, 0.071037, 0.13032, 0.14023, 0.15984, 0.15805], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 