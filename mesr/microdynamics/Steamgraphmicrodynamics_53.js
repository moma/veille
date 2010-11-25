var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"Jacques Delors": {
men: [0.26533, 0.73258, 0.73119, 0.7308, 0.73057, 0.72992, 0.9524, 0.95251, 0.95222, 0.94889, 0.94883, 0.94912, 0, 0, 0, 0.93777, 0.93815, 0.93858, 0.93875, 0.93963, 0.93952, 0.93917, 0.93955, 0.93898, 0.93834, 0.9382, 0.93809, 0.93808, 0.93707, 0, 0, 0, 0.094002, 0.035293, 0.028597, 0.042272, 0.042265, 0.042281, 0.042289, 0.042291, 0.042271, 0.042292, 0.042326, 0.045999, 0.052575, 0.046427, 0.017206, 0.044991, 0.11364, 0, 0.24927, 0.20571, 0.20571, 0.1581, 0.20255, 0.19351, 0.17684, 0.21426, 0.21423, 0.22745, 0.22737, 0.22729, 0.21242, 0.2334, 0.172, 0.19537, 0.19538, 0.2549, 0.19092, 0.34905, 0.38767, 0.2237, 0.22363, 0.22351, 0.22363, 0.22385, 0.27173, 0.27211, 0.272, 0.27207, 0.27212, 0.27202, 0.27217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021275, 0.01999, 0.020004, 0.02002, 0.020058, 0.020076, 0.020055, 0.022798, 0.0238, 0.024935, 0.024917, 0.030153, 0.028585, 0.037108, 0.43799, 0.65928, 0.65912], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"modèle européen": {
men: [0.58357, 0.58401, 0.49851, 0.37721, 0.15562, 0.15548, 0.15539, 0.15541, 0.15536, 0.15545, 0.15544, 0.15548, 0.15558, 0.42635, 0.94214, 0.2198, 0.18343, 0.18351, 0.18354, 0.18372, 0.18369, 0.17536, 0.25827, 0.25811, 0.25793, 0.2579, 0.25786, 0.047246, 0.047196, 0.063638, 0.070006, 0.13632, 0.13632, 0.13621, 0.13621, 0.13984, 0.065925, 0.065949, 0.065961, 0.065966, 0.065933, 0.29273, 0.29296, 0.29333, 0.29343, 0, 0, 0, 0, 0, 0, 0.94494, 0.94497, 0.94458, 0.94448, 0.94431, 0.94343, 0.94353, 0.94341, 0.9435, 0.94316, 0.94284, 0.71551, 0.40732, 0.28518, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10743, 0.10745, 0.10741, 0.29218, 0.29195, 0.29195, 0.55258, 0.55312, 0.55353, 0.32709, 0.32713, 0.32693, 0.32693, 0.43325, 0.41278, 0.4127, 0.41299, 0.41332, 0.4141, 0.18507, 0.055926, 0.055919, 0.055908, 0.079174, 0.22931, 0.22902, 0.20475, 0.20484, 0.15482, 0.15479, 0.15475], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.08205, 0.92604, 0.92428, 0.92379, 0.92351, 0.92269, 0.92215, 0.92225, 0.92198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93852, 0.93871, 0.93836, 0.93888, 0.93813, 0.93815, 0.93862, 0.93955, 0.94024, 0.94031, 0.95154, 0.95096, 0.95094, 0.95085, 0.94717, 0.94701, 0.94767, 0.94841, 0.61636, 0.45653, 0.3476, 0.34755, 0.26486, 0.23714, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues illicites": {
men: [0, 0.045805, 0.059314, 0.059283, 0.059265, 0.059212, 0.064087, 0.064094, 0.053595, 0.053624, 0.05362, 0.062596, 0.062635, 0.089061, 0.075915, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93703, 0.93737, 0.93755, 0.9376, 0.93715, 0.93762, 0.93837, 0.93957, 0.93986, 0.93985, 0.93994, 0.94, 0.94193, 0.94055, 0.93079, 0.93009, 0.93012, 0.92973, 0.92964, 0.92947, 0.92861, 0.9287, 0.92858, 0.92867, 0.92833, 0.92802, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etats européens": {
men: [0.067362, 0.21436, 0.2044, 0.19921, 0.20352, 0.19917, 0.19199, 0.18303, 0.17275, 0.19926, 0.24848, 0.25614, 0.34613, 0.37598, 0.39483, 0.048584, 0.12208, 0.20219, 0.17048, 0.12515, 0.077535, 0.067506, 0.11096, 0.10977, 0.10969, 0.10793, 0.11059, 0.10468, 0.14484, 0.14827, 0.12606, 0.10842, 0.11933, 0.2233, 0.18752, 0.18746, 0.19246, 0.19511, 0.1827, 0.18441, 0.18432, 0.18113, 0.18328, 0.12046, 0.097184, 0.096508, 0.092055, 0.047013, 0.055288, 0.073584, 0.052394, 0.051318, 0.054753, 0.057324, 0.057318, 0.059116, 0.049083, 0.05376, 0.073927, 0.07451, 0.068055, 0.087022, 0.077458, 0.083735, 0.11676, 0.10847, 0.10535, 0.11094, 0.11092, 0.11202, 0.11583, 0.15182, 0.19618, 0.19531, 0.27025, 0.24325, 0.27319, 0.21492, 0.18998, 0.31528, 0.31535, 0.40048, 0.37737, 0.37707, 0.34083, 0.36712, 0.25389, 0.25767, 0.25769, 0.3843, 0.45876, 0.55488, 0.53435, 0.53988, 0.57381, 0.52753, 0.56376, 0.47793, 0.50037, 0.49984, 0.51005, 0.50995, 0.50998, 0.47709, 0.51191, 0.39829, 0.34692, 0.39701, 0.37786, 0.32942], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Parlement européen": {
men: [0.20657, 0.15777, 0.17023, 0.1743, 0.18038, 0.16845, 0.17037, 0.15226, 0.13754, 0.1279, 0.12648, 0.10998, 0.10501, 0.063397, 0.094456, 0.078935, 0.080186, 0.090867, 0.087253, 0.099091, 0.094579, 0.089272, 0.1119, 0.15514, 0.14413, 0.13457, 0.13179, 0.11167, 0.11946, 0.13198, 0.12179, 0.11345, 0.11563, 0.11194, 0.11065, 0.09443, 0.11895, 0.093283, 0.091555, 0.093112, 0.17799, 0.12437, 0.098294, 0.052893, 0.052958, 0.054004, 0.049975, 0.049402, 0.052152, 0.058215, 0.053364, 0.056857, 0.058451, 0.061216, 0.05204, 0.05743, 0.062473, 0.080503, 0.091923, 0.093986, 0.10772, 0.12561, 0.13694, 0.16136, 0.19853, 0.19378, 0.19268, 0.18555, 0.19099, 0.19044, 0.18735, 0.20746, 0.19097, 0.19025, 0.18632, 0.18935, 0.1892, 0.16612, 0.15528, 0.1495, 0.14107, 0.14567, 0.12559, 0.14088, 0.12177, 0.11795, 0.11823, 0.1167, 0.12177, 0.14144, 0.147, 0.13893, 0.21682, 0.22145, 0.235, 0.21454, 0.23308, 0.23165, 0.25879, 0.29874, 0.30288, 0.31789, 0.31881, 0.28453, 0.28779, 0.26537, 0.18977, 0.18296, 0.17006, 0.1878], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie aéronautique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.043822, 0.043789, 0.045949, 0.04593, 0.045925, 0.042803, 0.047249, 0.047255, 0.047248, 0.047253, 0.047236, 0.072614, 0.07274, 0.099548, 0, 0, 0, 0, 0, 0.93148, 0.93281, 0.93237, 0.93212, 0.93162, 0.28111, 0.28139, 0.28152, 0.097357, 0.068698, 0.068714, 0.068728, 0.068703, 0.068741, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.88136, 0.89803, 0.89787, 0.8985, 0.8992, 0.92299, 0.92385, 0.92287, 0.92275, 0.92258, 0.92262, 0.92193, 0.96913, 0.96875, 0.95316, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorisation de culture": {
men: [0, 0.1117, 0.1586, 0.15852, 0.15847, 0.13071, 0.076544, 0.18151, 0.17561, 0.17571, 0.17569, 0.17575, 0.16886, 0.16882, 0.22567, 0.20023, 0.17356, 0.16143, 0.17867, 0.20277, 0.44287, 0.11072, 0.1401, 0.14001, 0.17243, 0.1724, 0.25605, 0.12007, 0.11994, 0.20491, 0.18466, 0.23513, 0.16768, 0.16755, 0.11041, 0.11038, 0.11037, 0.085367, 0.069644, 0.13995, 0.11518, 0.12794, 0.11878, 0.069791, 0.21788, 0.21788, 0.2179, 0.21791, 0.2817, 0.28129, 0.32337, 0.3635, 0.36351, 0.33389, 0.35905, 0.37011, 0.51884, 0.64346, 0.44785, 0.4479, 0.44773, 0.22352, 0.20169, 0.2018, 0.19202, 0.19216, 0.19216, 0.19223, 0.18602, 0.20006, 0.1246, 0.090822, 0.097961, 0.097908, 0.097959, 0.11732, 0.11737, 0.11754, 0.082673, 0.082692, 0.082709, 0.080352, 0.082712, 0, 0, 0, 0.039452, 0.039482, 0.039485, 0.067294, 0.067253, 0.067252, 0.092641, 0.092626, 0.092609, 0.10331, 0.11842, 0.94523, 0.94611, 0.94511, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque mortel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94423, 0.94409, 0.94408, 0.94334, 0.94331, 0.94308, 0.94294, 0.94328, 0.94346, 0.94352, 0.94962, 0.76471, 0.76532, 0.7663, 0.63696, 0.63695, 0.63701, 0.63705, 0.63473, 0.6338, 0.63247, 0.63199, 0.63202, 0.63175, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barroso": {
men: [0.099757, 0.10409, 0.11157, 0.16277, 0.16828, 0.18688, 0.18678, 0.1868, 0.18973, 0.15582, 0.1854, 0.18545, 0.1478, 0.11224, 0.19426, 0.17965, 0.20264, 0, 0.051879, 0.091124, 0.11849, 0.12315, 0.13706, 0.1358, 0.12854, 0.12852, 0.096324, 0.0093264, 0.022839, 0.055385, 0.054197, 0.054189, 0.053407, 0.051324, 0.049786, 0.049037, 0.04903, 0.049172, 0.049306, 0.051464, 0.10256, 0.20696, 0.30012, 0.23216, 0.25897, 0.26854, 0.25224, 0.21016, 0.19423, 0.16278, 0.1054, 0.093627, 0.089755, 0.0927, 0.081883, 0.084643, 0.087512, 0.08623, 0.086477, 0.085382, 0.084706, 0.089154, 0.089654, 0.10267, 0.12598, 0.20901, 0.25676, 0.25113, 0.25038, 0.24115, 0.23637, 0.25072, 0.23747, 0.27572, 0.27959, 0.26401, 0.26141, 0.25748, 0.24601, 0.17057, 0.14806, 0.14111, 0.15895, 0.14467, 0.1422, 0.14219, 0.14727, 0.089004, 0.082487, 0.077626, 0.09131, 0.12581, 0.13448, 0.21753, 0.25779, 0.25797, 0.25417, 0.42816, 0.50726, 0.52263, 0.52256, 0.52246, 0.52249, 0.48187, 0.41743, 0.32011, 0.2241, 0.087802, 0.076015, 0.072463], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouveaux antibiotiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65151, 0.77314, 0.53207, 0.42308, 0.46212, 0.46255, 0.42795, 0.38103, 0.38119, 0.35256, 0.39983, 0.44299, 0.44293, 0.44293, 0.38636, 0.2748, 0.35422, 0.46521, 0.39916, 0.39885, 0.4695, 0.66212, 0.66202, 0.94956, 0.94346, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14273, 0.19277, 0.19287, 0.19306, 0.1932, 0.19322, 0.19324, 0.19312, 0.19312, 0.93977, 0.9396, 0.93944, 0.9401, 0.94083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gestion de la pandémie": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19453, 0.36818, 0.36808, 0.36788, 0.36807, 0.36843, 0.36861, 0.36913, 0.36898, 0.46234, 0.64213, 0.94396, 0.94448, 0.94373, 0, 0, 0, 0, 0, 0, 0.92888, 0.92886, 0.93534, 0.93518, 0.93501, 0.93567, 0.94034, 0.94213, 0.94301, 0.94201, 0.26569, 0.26564, 0.26566, 0.26546, 0.19627, 0.19619, 0.11048, 0.11049, 0.11047, 0.11044], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"commission sénatoriale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92999, 0.93063, 0.93067, 0.93098, 0.93081, 0.93067, 0.932, 0.93156, 0.93131, 0.93081, 0.93129, 0.9322, 0.93265, 0.93396, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93456, 0.35328, 0.35322, 0.35315, 0.3534, 0.35368, 0.35435, 0.35468, 0.35431, 0.35426, 0.35419, 0.35421, 0.18453, 0.18429, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ours brun": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77476, 0.77501, 0.775, 0.77507, 0.77512, 0.77229, 0.77116, 0.76954, 0.76897, 0.76899, 0.76867, 0.76859, 0.76845, 0.76774, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94133, 0.94266, 0.94227, 0.94249, 0.48343, 0.48325, 0.48352, 0.48313, 0.15122, 0.15129, 0.15144, 0.15156, 0.15157, 0.15159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"espèces protégées": {
men: [0.26918, 0.26938, 0.34268, 0.3425, 0.34239, 0.46594, 0.46567, 0.35176, 0.35165, 0.18231, 0.1823, 0.18236, 0.22596, 0.22774, 0.2507, 0.25065, 0.27571, 0.27584, 0.27589, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67312, 0.67349, 0.67478, 0.67525, 0.67527, 0.6755, 0.94552, 0.94539, 0.94673, 0.94629, 0.94603, 0.94552, 0.94601, 0.94694, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amflora": {
men: [0.047113, 0.11305, 0.10149, 0.10144, 0.098563, 0.083046, 0.082035, 0.078534, 0.07851, 0.074572, 0.074567, 0.073779, 0.07253, 0.071259, 0.09232, 0.037398, 0, 0, 0.02495, 0.047381, 0.050786, 0.070283, 0.070311, 0.13502, 0.16651, 0.20607, 0.3381, 0.94152, 0.9405, 0.9457, 0.94605, 0.9459, 0.94087, 0.94014, 0.14004, 0.083849, 0.083837, 0.083867, 0.068398, 0.068402, 0.11598, 0.10167, 0.057999, 0.055617, 0.055635, 0.055634, 0.055639, 0.049184, 0.053292, 0.05715, 0.07741, 0.074365, 0.074368, 0.074336, 0.063269, 0.047971, 0.11867, 0.081784, 0.065214, 0.061211, 0.061188, 0.050777, 0.050866, 0.04575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.055916, 0.27547, 0.2756, 0.46264, 0.23011, 0.23017, 0.23021, 0.2048, 0.20157, 0.18173, 0.18173, 0.18182, 0.24841, 0.24859, 0.17484, 0.097561, 0.097502, 0.0975, 0.22157, 0.22153, 0.22149, 0.29409, 0.46075, 0.085284, 0.062387, 0.11547, 0.056194, 0.056183, 0.051183, 0.051145, 0.051079, 0.051059, 0.051081, 0.051085, 0.051075, 0.051062], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pacte écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20909, 0.20903, 0.20895, 0.20892, 0.209, 0.2091, 0.20914, 0.20933, 0.20931, 0.20923, 0.20931, 0.20919, 0.9407, 0.94056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.098737, 0.21229, 0.2121, 0.17767, 0.17765, 0.17767, 0.1776, 0.39428, 0.39496, 0.39518, 0.39594, 0.47887, 0.47889, 0.47905, 0.66605, 0.66596, 0.6669, 0.94156, 0.47768, 0.47742, 0.47767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04238, 0.045697, 0.045731, 0.040059, 0.040065, 0.040041, 0.04004, 0.043359, 0.037514, 0.036387, 0.041884, 0.11679, 0.11702, 0.11713, 0.27275, 0.27271, 0.27266, 0.38658, 0.27852, 0.27816, 0.18447, 0.18455, 0.15567, 0.13806, 0.13778], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95248, 0.67448, 0.72619, 0.54884, 0.54895, 0.48236, 0.44615, 0.44598, 0.44616, 0.44589, 0.44559, 0.44553, 0.44547, 0.44547, 0.34727, 0.25683, 0.080837, 0.12792, 0.12792, 0.22137, 0.43035, 0.27662, 0.27658, 0.27668, 0.27674, 0.27675, 0.27662, 0.27676, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076364, 0.076509, 0.07658, 0.10149, 0.10148, 0.10146, 0.10146, 0.10139, 0.33762, 0.33749, 0.93994, 0.94, 0.93982, 0.93959], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandemrix": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083504, 0.15495, 0.15495, 0.15168, 0.14781, 0.17024, 0.19725, 0.19732, 0.20383, 0.20384, 0.20375, 0.20385, 0.20401, 0.4238, 0.51467, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41376, 0.4138, 0.41365, 0.41351, 0.41423, 0.41445, 0.50202, 0.65586, 0.65589, 0.65611, 0.65599, 0.65589, 0.65683, 0.73316, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075224, 0.075222, 0.14144, 0.14141, 0.15164, 0.15175, 0.15186, 0.34466, 0.34498, 0.34462, 0.34457, 0.34451, 0.34452, 0.34427, 0.92953, 0.92916, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"libre-échange": {
men: [0.59282, 0.59327, 0.60801, 0.60769, 0.6075, 0.49998, 0.56544, 0.6084, 0.089909, 0.077262, 0.055003, 0.05502, 0.055054, 0.043153, 0.035374, 0.035368, 0.035383, 0.035399, 0.035405, 0.045331, 0.045326, 0.044028, 0.064346, 0.087071, 0.08044, 0.080429, 0.080419, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11864, 0.11868, 0.12876, 0.12877, 0.10929, 0.10934, 0.098691, 0.024759, 0.01827, 0.014778, 0.035481, 0.035421, 0.035292, 0.030812, 0.12405, 0.1084, 0.10404, 0.10307, 0.10243, 0.10241, 0.10295, 0.12621, 0.16099, 0.17222, 0.16266, 0.15185, 0.12904, 0.16647, 0.089719, 0.12516, 0.1495, 0.15272, 0.19534, 0.20274, 0.19816, 0.19592, 0.16774, 0.17337, 0.17126, 0.20359, 0.27384, 0.22628, 0.24296, 0.2174, 0.1948, 0.19472, 0.16294, 0.10419, 0.11123, 0.1239, 0.12877, 0.14681, 0.15385, 0.11452, 0.15112, 0.12725, 0.12238, 0.23026, 0.23707, 0.2314, 0.17097, 0.18259, 0.16447, 0.16429, 0.14233, 0.14231, 0.14231, 0.13873, 0.11737, 0.12324, 0.13032, 0.036575, 0.12445, 0.13106], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"h5n1": {
men: [0, 0, 0, 0, 0.01646, 0.016445, 0.0049408, 0.0039183, 0.0031319, 0.0028922, 0.0027677, 0.0027685, 0.0028702, 0.002959, 0.0029125, 0.0031309, 0.0031322, 0.0031336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9326, 0.93305, 0.93436, 0.93398, 0.9342, 0.64784, 0.17705, 0.17715, 0.10754, 0.10755, 0.1076, 0.10771, 0.10779, 0.10779, 0, 0.055621, 0.05562, 0.1067, 0.10669, 0.1124, 0.21054, 0.21071, 0.93818, 0.93905, 0.93806, 0.93793, 0.93776, 0.9378, 0.9371, 0.92953, 0.92916, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bactéries résistantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94445, 0.50149, 0.15401, 0.092837, 0.092854, 0.083111, 0.11202, 0.099124, 0.099164, 0.091842, 0.09178, 0.091767, 0.089349, 0.089348, 0.060694, 0.038168, 0.052127, 0.079892, 0.079891, 0.094872, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3467, 0.93815, 0.93862, 0.93955, 0.94024, 0.94031, 0.94045, 0.93987, 0.93985, 0.93977, 0.9396, 0.93944, 0.9401, 0.94083, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistance humanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.7363, 0.31032, 0.2586, 0.2587, 0.25882, 0.25887, 0.25911, 0.19933, 0.16191, 0.13641, 0.11796, 0.11788, 0.11787, 0.11785, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94262, 0.9435, 0.9425, 0.94237, 0.9422, 0.94224, 0.94154, 0.94033, 0.93995, 0.94036, 0.94042, 0.94024, 0.94001], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"économie chinoise": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13934, 0.2446, 0.41287, 0.41291, 0.41276, 0.41262, 0.41334, 0.41356, 0.93557, 0.94502, 0.94506, 0.94538, 0.9452, 0.94507, 0.94172, 0.94128, 0.94102, 0.51976, 0.52003, 0.52054, 0.28089, 0.28129, 0.28117, 0, 0, 0, 0, 0, 0, 0, 0.073566, 0.076146, 0.076152, 0.071481, 0.076116, 0.076115, 0.070136, 0.080518, 0.080504, 0.092602, 0.092674, 0.09285, 0.10625, 0.26043, 0.046898, 0.046889, 0.046891, 0.06251, 0.06243, 0.062405, 0.045164, 0.045167, 0.045158, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"populations indigènes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46737, 0.55954, 0.55982, 0.56038, 0.56064, 0.56143, 0.5612, 0.56133, 0.56145, 0.94601, 0.94653, 0.94578, 0.94579, 0.94626, 0.93653, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41627, 0.37502, 0.37537, 0.2616, 0.26156, 0.26151, 0.26152, 0.26133, 0.26099, 0.29126, 0.36357, 0.3636, 0.36353, 0.36344], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pandémie grippale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083405, 0.083431, 0.073303, 0.3294, 0.32974, 0.34673, 0.34687, 0.34703, 0.34709, 0.34742, 0.34738, 0.35568, 0.3655, 0.38469, 0.37469, 0.37463, 0.37328, 0.21425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.039412, 0.039411, 0.084601, 0.64626, 0.93501, 0.93567, 0.9364, 0.93818, 0.93905, 0.93806, 0.93793, 0.93776, 0.9378, 0.1825, 0.10124, 0.1012, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nuage radioactif": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.033723, 0.033755, 0.033751, 0.03594, 0.034143, 0.047856, 0.059171, 0.0632, 0.076823, 0.084078, 0.30807, 0.39285, 0.393, 0.39294, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92645, 0.92628, 0.92542, 0.92552, 0.92539, 0.92548, 0.92515, 0.92484, 0.92644, 0.92695, 0.92873, 0.92936, 0.9294, 0.92971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût économique": {
men: [0.094493, 0.094565, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9352, 0.93507, 0.93541, 0.93558, 0.93564, 0.93518, 0.93565, 0.9364, 0.9376, 0.93789, 0.93788, 0.59773, 0.59777, 0.59558, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31196, 0.14644, 0.14638, 0.12962, 0.088173, 0.088141, 0.072689, 0.048291, 0.048291, 0.046011, 0.035754, 0.034198, 0.032826, 0.032831, 0, 0.064987, 0.053349, 0.05323, 0.05304, 0.050619, 0.051239, 0.088441, 0.077001, 0.079421, 0.098832, 0.10408, 0.10961, 0.10953, 0.10939, 0.033381, 0.046743, 0.049895, 0.067787, 0.080496], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vague de chaleur": {
men: [0.0069043, 0.0069095, 0.011387, 0.010602, 0.009357, 0.014955, 0.014946, 0.014948, 0.013498, 0, 0, 0, 0, 0.01256, 0.011281, 0.030088, 0.030101, 0.029003, 0.028363, 0.026619, 0.026616, 0.025992, 0.026397, 0.026893, 0.029136, 0.029769, 0.042236, 0.041701, 0.093026, 0.042315, 0.042331, 0.049521, 0.055408, 0.073723, 0.073721, 0.083328, 0.060893, 0.081349, 0.093073, 0.093078, 0.093033, 0.1097, 0, 0, 0, 0, 0, 0, 0, 0.19274, 0.93422, 0.74635, 0.74638, 0.74607, 0.40135, 0.40128, 0.40091, 0.40095, 0.4009, 0.46219, 0.46202, 0.46186, 0.46267, 0.35153, 0.3522, 0.19919, 0.1992, 0.19927, 0.93141, 0.93127, 0.9326, 0.93216, 0.93191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 