var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"crise profonde": {
men: [0.85231, 0.85228, 0.85244, 0.95331, 0.95327, 0.95315, 0.95392, 0.95428, 0.95428, 0.9545, 0.81576, 0.81584, 0.81646, 0.89997, 0.73866, 0.73907, 0.73893, 0.73914, 0.73764, 0.73713, 0.73748, 0.73656, 0.73689, 0.73798, 0.65901, 0.65757, 0.657, 0, 0, 0, 0, 0, 0, 0.31462, 0.31447, 0.31455, 0.23633, 0.23613, 0.26106, 0.26148, 0.2616, 0.26159, 0.282, 0.28212, 0.28212, 0.4145, 0.43174, 0, 0, 0.56715, 0.72703, 0.7266, 0.58964, 0.54778, 0.54793, 0.54768, 0.42605, 0.42583, 0.4258, 0.42564, 0.41695, 0.41702, 0.41725, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"armes lourdes": {
men: [0.66433, 0.6566, 0.72288, 0.59807, 0.63017, 0.63009, 0.6578, 0.66733, 0.62687, 0.49762, 0.4979, 0.56761, 0.56803, 0.8056, 0.80714, 0.96461, 0.96443, 0.96194, 0.95609, 0.53743, 0.37146, 0.371, 0.28456, 0.28498, 0.28498, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77663, 0.70437, 0.84856, 0.84881, 0.84843, 0.849, 0.84921, 0.84939, 0.84944, 0.84988, 0.85013, 0.85041, 0.55485, 0.45049, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"étalement urbain": {
men: [0.30768, 0.30766, 0.29236, 0.36619, 0.36617, 0.36612, 0.39403, 0.39417, 0.43862, 0.41548, 0.41571, 0.28433, 0.28455, 0.26675, 0.35789, 0.3307, 0.35696, 0.25061, 0.2501, 0.24993, 0.33875, 0.33833, 0.21245, 0.24949, 0.18378, 0.18338, 0.18322, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20339, 0.20348, 0.20345, 0.16634, 0.166, 0.28867, 0.28861, 0.30775, 0.30798, 0.35898, 0.35888, 0.32238, 0.47335, 0.52494, 0.54886, 0.54867, 0.54884, 0.62634, 0.46891, 0.3684, 0.33606, 0.37053, 0.37072, 0.34124, 0.34135, 0.401, 0.11588, 0.039046, 0.023567, 0.023585, 0.023584, 0.023605, 0.026257, 0.12636, 0.13162, 0.10838, 0.15677, 0.15678, 0.15674], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets verts": {
men: [0.14651, 0.18667, 0.1867, 0.18698, 0.18697, 0.23654, 0.23673, 0.23682, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17385, 0.17394, 0.17399, 0.13671, 0.13665, 0.13661, 0.1505, 0.15049, 0.15043, 0.20002, 0.20005, 0.20016, 0.2002, 0.22505, 0, 0, 0, 0, 0, 0, 0, 0, 0.94817, 0.94902, 0.94711, 0.94682, 0.94662, 0.94624, 0.94693, 0.9464, 0.94613, 0.95099, 0.95093, 0.95044, 0.94956, 0.94923, 0.94032, 0.93989, 0.94052, 0.94076, 0.94095, 0.94101, 0.9415, 0.94177, 0.94208, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infrastructures publiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.069761, 0.0698, 0.069807, 0.095234, 0.045194, 0.049552, 0.049579, 0.04957, 0.042008, 0.043613, 0.049582, 0.046732, 0.046675, 0.046696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29181, 0.2921, 0.29223, 0.29219, 0.29245, 0.87432, 0.87406, 0.87387, 0.87352, 0.87415, 0.87366, 0.87342, 0.87374, 0.96475, 0.96378, 0.96289, 0.96255, 0.96284, 0.9624, 0, 0.9398, 0.94, 0.94006, 0.94054, 0.94082, 0.94112, 0.94152, 0.14248, 0.14256, 0.14261, 0.14271, 0.14271, 0.14284, 0.14299, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone inondable": {
men: [0.078881, 0.49531, 0.25159, 0.25197, 0.25196, 0.25193, 0.18616, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60769, 0.61416, 0.61461, 0.61426, 0.61409, 0.61432, 0.86242, 0.86198, 0.96996, 0.96962, 0.96991, 0.95153, 0.95217, 0.95241, 0.85118, 0.58841, 0.58871, 0.58889, 0.58908, 0.58933, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transports collectifs": {
men: [0.15622, 0.21755, 0.1959, 0.28136, 0.24242, 0.24239, 0.23967, 0.23976, 0.25247, 0.29034, 0.29051, 0.36657, 0.44437, 0.50341, 0.79683, 0.59689, 0.23226, 0.03641, 0.025987, 0.017461, 0.016861, 0.01684, 0.017492, 0, 0, 0, 0, 0, 0, 0, 0.12911, 0.1474, 0.18909, 0.28503, 0.30958, 0.30966, 0.36085, 0.4791, 0.47863, 0.4794, 0.34074, 0.37174, 0.37225, 0.36297, 0.24018, 0.31401, 0.24431, 0.26673, 0.29041, 0.29051, 0.20598, 0.20882, 0.20893, 0.20899, 0.2237, 0.23436, 0.23429, 0.26598, 0.24546, 0.21006, 0.24962, 0.24634, 0.2059, 0.17268, 0.27133, 0.24901, 0.1998, 0.17643, 0.1682, 0.10431, 0.14809, 0.10988, 0.1073, 0.14213, 0.15285, 0.14717, 0.14795, 0.17101, 0.12242, 0.12305, 0.14022, 0.15463, 0.2011, 0.19548, 0.1918, 0.19935, 0.23528, 0.16258, 0.1397, 0.19863, 0.27534, 0.2754, 0.42492, 0.42514, 0.42526, 0.4254, 0.40308, 0.49054, 0.31721, 0.33012, 0.37955, 0.37004, 0.33681, 0.32238, 0.23921, 0.22019, 0.074039, 0.16469, 0.1647, 0.1523], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assises nationales": {
men: [0.93603, 0.936, 0.93617, 0.93757, 0.93753, 0.93742, 0.46266, 0.46283, 0.46283, 0.46294, 0.4632, 0.46325, 0.4636, 0.46347, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44142, 0.44091, 0.44062, 0.44074, 0.44088, 0.44157, 0.44188, 0.44168, 0.44178, 0.4413, 0.34256, 0.4275, 0.4282, 0.42838, 0, 0.073432, 0.073462, 0.067139, 0.067123, 0.064273, 0.06427, 0.060437, 0.060457, 0.060493, 0.058044, 0.061285, 0.061303, 0.061321, 0.16589, 0.30541, 0.30525, 0.37761, 0.29452, 0.32523, 0.32529, 0.20071, 0.1331, 0.10852, 0.11878, 0.11892, 0.11891, 0.08774, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.049143, 0.12741, 0.12735, 0.11794, 0.13516, 0.13521, 0.17318, 0.15493, 0.18337, 0.19922, 0.21875, 0.36831, 0.31629, 0.31639, 0.20649, 0, 0, 0, 0, 0, 0, 0, 0.31891, 0.31902, 0.3006, 0.28393, 0.23543, 0.23536], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"oxydes d' azote": {
men: [0.88925, 0.90334, 0.44904, 0.4619, 0.46188, 0.56793, 0.53517, 0.53537, 0.53537, 0.5355, 0.5358, 0.53585, 0.53626, 0.48668, 0.34375, 0.28218, 0.37442, 0.37001, 0.36926, 0.23894, 0.082892, 0.056335, 0.056361, 0.056444, 0.056444, 0.05632, 0.056271, 0, 0, 0, 0, 0, 0, 0, 0, 0.94556, 0.94453, 0.94374, 0.94281, 0.94434, 0.94475, 0.94471, 0.55901, 0.55923, 0.28432, 0.28425, 0.28422, 0.2842, 0.21546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17804, 0.26988, 0.2698, 0.17759, 0.20294, 0.34872, 0.34852, 0.34842, 0.29704, 0.21689, 0.21678, 0.24854, 0.2184, 0.16863, 0.096229, 0.096294, 0.096318, 0.11562, 0.11563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réseaux de transport": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.057851, 0.072442, 0.072483, 0.094168, 0.094239, 0.092674, 0.092851, 0.069165, 0.25502, 0.25509, 0.25457, 0.2544, 0.25452, 0.2542, 0.22417, 0.27261, 0.27261, 0.27201, 0.27178, 0.38054, 0.31675, 0.63309, 0, 0, 0, 0, 0, 0, 0.050266, 0.043737, 0.043694, 0.043765, 0.1006, 0.098866, 0.24016, 0.24026, 0.21589, 0.21583, 0.22521, 0.25655, 0.23849, 0.32609, 0.26831, 0.27285, 0.25153, 0.24441, 0.24546, 0.25228, 0.14432, 0.17269, 0.1799, 0.17983, 0.18581, 0.2176, 0.23714, 0.15788, 0.21695, 0.20102, 0.22491, 0.23526, 0.2298, 0.21183, 0.21187, 0.16084, 0.15867, 0.15865, 0.15299, 0.3126, 0.38228, 0.38666, 0.38911, 0.46961, 0.48352, 0.48339, 0.42335, 0.35447, 0.33617, 0.35397, 0.36663, 0.35759, 0.35501, 0.2892, 0.16908, 0.1658, 0.14334, 0.14342, 0.12886, 0.17242, 0.13793, 0.20223, 0.23104, 0.22401, 0.22417, 0.28037, 0.29962, 0.21198, 0.54747, 0.64317, 0.64351, 0.39704, 0.30851, 0.076681], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ceinture verte": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96256, 0.96045, 0.71646, 0.71656, 0.71574, 0.71527, 0.71547, 0.71569, 0.7168, 0.71731, 0.71698, 0.71716, 0.71637, 0.71577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32351, 0.46233, 0.46208, 0.94122, 0.94086, 0.94023, 0.9404, 0.94091, 0.94108, 0.94138, 0.9415, 0.94256, 0.94248, 0.9418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bâtiments neufs": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.07196, 0.072001, 0.072008, 0.072063, 0.13759, 0.13785, 0.13793, 0.93773, 0.938, 0.93609, 0.93544, 0.93588, 0.93472, 0.93514, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95517, 0.95536, 0.95631, 0.72581, 0.72571, 0.84734, 0.84563, 0.84538, 0.51547, 0.55247, 0.55287, 0.55256, 0.56198, 0.56218, 0.47111, 0.43158, 0.43118, 0.46073, 0.46087, 0.28984, 0.29003, 0.26341, 0.078598, 0.025023, 0.025036, 0.025043, 0.012279, 0.012284, 0.010703, 0.011152, 0.010839, 0.0096777, 0.0096775, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie touristique": {
men: [0, 0, 0, 0, 0, 0.23135, 0.23154, 0.23162, 0.23162, 0.94453, 0.51549, 0.35443, 0.3547, 0.27018, 0.27069, 0.27084, 0.27079, 0.21878, 0.21833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4604, 0.46053, 0.94054, 0.942, 0.94266, 0.57984, 0.57998, 0.57934, 0.57886, 0.57829, 0.46407, 0.46427, 0.46425, 0.46489, 0, 0, 0, 0, 0, 0.67957, 0.67979, 0.6802, 0.6798, 0.68013, 0.94369, 0.79393, 0.29587, 0.29578, 0.29562, 0.2956, 0.29549, 0.29529, 0.29535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bassin parisien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0071011, 0.0072073, 0.0070389, 0.0070524, 0.0070562, 0.0059301, 0.0059318, 0.005807, 0.0057606, 0.012997, 0.021966, 0.023544, 0.025557, 0.026909, 0, 0, 0, 0, 0.036113, 0.10545, 0.10548, 0.13785, 0.18245, 0.18237, 0.18241, 0.18221, 0.18206, 0.18188, 0.18218, 0.94165, 0.94161, 0.94291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26573, 0.40587, 0.33134, 0.33124, 0.45692, 0.4569, 0.45666, 0.45624, 0.45608, 0.45621, 0.45601, 0.32184, 0.32192, 0.32199, 0.18421, 0, 0, 0, 0, 0, 0, 0.60023, 0.60067, 0.60065, 0.60118, 0.96466, 0.96416, 0.9645, 0.96501, 0.96459, 0.96465, 0.96435], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"circulation automobile": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10563, 0.096676, 0.084976, 0.098376, 0.11064, 0.11064, 0.14408, 0.18042, 0.18045, 0.18024, 0.18012, 0.29758, 0.19503, 0.19533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60315, 0.6034, 0.60341, 0.95516, 0.95505, 0.95499, 0.95431, 0.95463, 0.6097, 0.46192, 0.46215, 0.46228, 0.46242, 0.4622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11038, 0.11435, 0.23604, 0.26237, 0.26231, 0.27098, 0.24519, 0.28832, 0.33103, 0.33116, 0.29754, 0.29739, 0.30546, 0.30535, 0.31498, 0.31483, 0.20473, 0.20478, 0.20482, 0.20483, 0.26201, 0.157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39928, 0.94834, 0.94805], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque mortel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94445, 0.94474, 0.94621, 0.94688, 0.94645, 0.94668, 0.94564, 0.94485, 0.94392, 0.94545, 0.95244, 0.76657, 0.76762, 0.76794, 0.63813, 0.63798, 0.6379, 0.63786, 0.63741, 0.63762, 0.638, 0.63763, 0.63794, 0.63813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"énergie positive": {
men: [0.058013, 0.058011, 0.058022, 0.064558, 0.064555, 0.064547, 0.044312, 0.044329, 0.044329, 0.044339, 0.044364, 0.044369, 0.044402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94836, 0.94773, 0.94799, 0.94829, 0.94977, 0.96308, 0.57667, 0.46107, 0.46056, 0.46018, 0.45972, 0.46047, 0.46067, 0.46065, 0.38659, 0.38675, 0.38676, 0.38666, 0.37651, 0, 0, 0, 0, 0, 0, 0, 0, 0.051953, 0.051937, 0.046108, 0.046105, 0.041914, 0.042547, 0.035775, 0.041274, 0.041282, 0.045471, 0.042413, 0.061936, 0.06193, 0.067335, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17553, 0.20449, 0.20437, 0.24258, 0.24267, 0.20607, 0.20596, 0.20577, 0.39384, 0.39395, 0.39377, 0.39404, 0.44976, 0.37861, 0.23429, 0.26894, 0.26902, 0.23022, 0.23032, 0.28689, 0.20613, 0.082361, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"trafic ferroviaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.073563, 0.073599, 0.073621, 0.32436, 0.12624, 0.094044, 0.083665, 0.083659, 0.083627, 0.083571, 0.083587, 0.080778, 0.084142, 0.084168, 0.054123, 0.054184, 0.05254, 0.051527, 0, 0, 0, 0, 0, 0, 0, 0.10253, 0.10251, 0.34105, 0.50796, 0.50768, 0.61824, 0.5545, 0.55448, 0.68891, 0.68827, 0.47261, 0.47276, 0.47254, 0.54368, 0.5001, 0.40446, 0.17127, 0.17135, 0.1714, 0.17146, 0.35166, 0.35173, 0.35193, 0.35206, 0.54282, 0.5428, 0.54328, 0.37321, 0.37301, 0.95153, 0.95203, 0.95161, 0.95167, 0.95138], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"air intérieur": {
men: [0.94505, 0.94502, 0.28297, 0.28339, 0.28338, 0.28335, 0.28357, 0.28368, 0.28368, 0.28375, 0.2839, 0.28393, 0.28415, 0.16635, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93621, 0.93714, 0.93758, 0.93745, 0.93829, 0.9364, 0.93612, 0.93592, 0.93555, 0.93622, 0.9357, 0.93544, 0.93578, 0.93573, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"préoccupations des Français": {
men: [0.95496, 0.95492, 0.9551, 0.95653, 0.95648, 0.95637, 0.95713, 0.65828, 0, 0, 0, 0, 0, 0.65918, 0.66045, 0.42012, 0.62743, 0.62761, 0.62633, 0.6259, 0.62619, 0.71434, 0.71466, 0.71572, 0.71571, 0.71414, 0.71352, 0.36278, 0.36236, 0.47087, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"trafic routier": {
men: [0.13275, 0.16028, 0.1559, 0.2115, 0.14537, 0.14535, 0.20238, 0.66755, 0.52552, 0.41772, 0.4699, 0.46995, 0.34605, 0.30558, 0.15859, 0.12675, 0.54507, 0.54523, 0.51004, 0.50969, 0.47556, 0.47497, 0.5205, 0.58953, 0.58952, 0.58823, 0.73807, 0.84644, 0.84547, 0.84491, 0, 0, 0, 0, 0, 0.12654, 0.1264, 0.1263, 0.12617, 0.12638, 0.12643, 0.12643, 0.11587, 0.10261, 0.12749, 0.14611, 0.14609, 0.34386, 0.27659, 0, 0.051088, 0.051058, 0.051083, 0.051098, 0.046605, 0.046583, 0.048891, 0.052899, 0.052895, 0.052875, 0.045712, 0.04572, 0.047899, 0.054901, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.038862, 0.042372, 0.042286, 0.042274, 0.036275, 0.03626, 0.024685, 0.024671, 0.023114, 0.028062, 0.027079, 0.028182, 0.027294, 0.034453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.092812, 0.09281, 0.092891, 0.092992, 0.092944, 0.065405, 0.06544, 0.079093, 0.079098, 0.13768], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"décès prématurés": {
men: [0.24213, 0.16497, 0.1158, 0.16001, 0.16001, 0.15999, 0.3841, 0.38424, 0.38424, 0.41175, 0.41198, 0.41202, 0.41233, 0.41222, 0.34431, 0.44483, 0.72713, 0.72734, 0.72586, 0.72536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94639, 0.94586, 0.94559, 0.75245, 0.75241, 0.75203, 0.75133, 0.75107, 0.75129, 0.41825, 0.41853, 0.41864, 0.23295, 0.23297, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones urbaines": {
men: [0.056789, 0.052588, 0.038013, 0.077592, 0.07803, 0.078021, 0.075666, 0.068025, 0.077611, 0.087283, 0.087332, 0.087341, 0.081015, 0.088126, 0.13612, 0.19239, 0.23233, 0.22516, 0.24869, 0.29512, 0.31007, 0.3789, 0.37907, 0.41054, 0.41053, 0.40963, 0.37533, 0.34635, 0.29297, 0.20658, 0.24056, 0.24068, 0.24105, 0.11593, 0.094443, 0.076863, 0.17094, 0.29522, 0.2706, 0.27104, 0.32473, 0.32471, 0.2576, 0.30404, 0.31596, 0.29603, 0.29599, 0.276, 0.25563, 0.27539, 0.224, 0.10538, 0.11283, 0.10212, 0.094311, 0.069753, 0.06262, 0.035073, 0.014255, 0.014329, 0.013139, 0.013667, 0.014285, 0.012868, 0.012728, 0, 0, 0, 0, 0, 0.013693, 0.013291, 0.010365, 0.0097416, 0.010529, 0.03453, 0.049173, 0.053184, 0.070948, 0.074577, 0.074536, 0.067554, 0.069902, 0.12174, 0.13383, 0.13644, 0.17501, 0.20513, 0.21978, 0.20495, 0.17374, 0.15358, 0.13618, 0.12922, 0.12925, 0.15206, 0.15212, 0.078178, 0.078224, 0.078897, 0.096601, 0.089426, 0.061175, 0.03011, 0.1403, 0.19124, 0.18608, 0.29192, 0.29194, 0.12414], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nuisances sonores": {
men: [0.045365, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.64854, 0.64885, 0.64804, 0.64834, 0.26311, 0.26311, 0.26253, 0.26231, 0.30179, 0.2832, 0.25036, 0.25043, 0.23218, 0.23254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.080952, 0.092922, 0.12473, 0.12477, 0.1248, 0.11118, 0.088141, 0.13449, 0.13448, 0.20411, 0.20397, 0.20401, 0.20412, 0.28915, 0.20847, 0.25563, 0.24117, 0.24115, 0.24098, 0.30036, 0.49088, 0.44336, 0.44357, 0.46577, 0.46619, 0.27029, 0.2702, 0.076285, 0.076255, 0.061517, 0.057066, 0.05705, 0.05342, 0.094881, 0.10023, 0.091429, 0.091398, 0.043966, 0.043946, 0.033121, 0.032105, 0.044852, 0.044855, 0.054249, 0.060592, 0.060611, 0.066306, 0, 0, 0, 0, 0, 0, 0.42421, 0.38539, 0.50347, 0.50373, 0.50351, 0.43402, 0.43389], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones touristiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.09479, 0.086311, 0.08195, 0.094347, 0.10602, 0.15506, 0.14831, 0.15781, 0.15914, 0.17415, 0.21717, 0.30316, 0.30857, 0.30819, 0.25291, 0.27629, 0.29222, 0.30285, 0.32549, 0.28791, 0.23172, 0.16865, 0.22977, 0.22984, 0.14639, 0.0868, 0.089605, 0.089626, 0.093673, 0.085212, 0.085128, 0.072313, 0.072344, 0.072342, 0.14306, 0.17889, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6222, 0.62179, 0.6219, 0.62223, 0.62235, 0.62254, 0.62262, 0.62332, 0.62327, 0.62282, 0.62297, 0.62309, 0.95391, 0.95435, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ordures ménagères": {
men: [0.097573, 0.11673, 0, 0, 0, 0, 0, 0, 0, 0.03965, 0.047458, 0.047463, 0.047499, 0.049149, 0.033945, 0.019977, 0.019974, 0.019979, 0.019939, 0.1399, 0.13091, 0.12858, 0.1209, 0.10236, 0.094247, 0.094041, 0.080973, 0.065814, 0.078708, 0.11779, 0.11783, 0.11786, 0.11805, 0, 0.050274, 0.036511, 0.032243, 0.024738, 0.026089, 0.026131, 0.029459, 0.03552, 0.089061, 0.084864, 0.084866, 0.084845, 0.084835, 0.082182, 0.095571, 0.10756, 0.12226, 0.18964, 0.18973, 0.24389, 0.21016, 0.27173, 0.27947, 0.28157, 0.40262, 0.38734, 0.31546, 0.29523, 0.29127, 0.3165, 0.27039, 0.21732, 0.21757, 0.18762, 0.20638, 0.15899, 0.20088, 0.20922, 0.071619, 0.074361, 0.096934, 0.16648, 0.14773, 0.13859, 0.13957, 0.1727, 0.1726, 0.17256, 0.15741, 0.13352, 0.079493, 0.1088, 0.15384, 0.14691, 0.16927, 0.14743, 0.17724, 0.17414, 0.18367, 0.17437, 0.19479, 0.19005, 0.1943, 0.20546, 0.24248, 0.22253, 0.1804, 0.25456, 0.23131, 0.2784, 0.30741, 0.24325, 0.21814, 0.24171, 0.17575, 0.18534], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement urbain": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16982, 0.17001, 0.17, 0.16987, 0.39046, 0.46393, 0.46439, 0.96147, 0.96134, 0.96221, 0.96027, 0.39974, 0.39966, 0.3995, 0.32297, 0.32279, 0.3227, 0.35527, 0.22168, 0.22156, 0.22136, 0.19262, 0.19267, 0.25703, 0.27628, 0.47344, 0.43088, 0.43091, 0.43113, 0.43126, 0.4314, 0.40414, 0.27863, 0.27879, 0.25737, 0.2871, 0.28709, 0.22663, 0.19082, 0.06224, 0.068897, 0.068933, 0.068903, 0.068908, 0.068887], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté urbaine": {
men: [0.18785, 0.10228, 0.116, 0.11617, 0.11518, 0.14139, 0.11862, 0.11162, 0.097379, 0.1023, 0.10235, 0.099658, 0.083533, 0.055198, 0.062867, 0.072866, 0.037084, 0.037095, 0.035893, 0.019365, 0.0070665, 0.0055753, 0.0057191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.047162, 0.048945, 0.075086, 0.068968, 0.065281, 0.064647, 0.066166, 0.068394, 0.07373, 0.07546, 0.080085, 0.078085, 0.078202, 0.077341, 0.070925, 0.073666, 0.048865, 0.060005, 0.076027, 0.079053, 0.068244, 0.061854, 0.080539, 0.11688, 0.1166, 0.099403, 0.1655, 0.1743, 0.17634, 0.19801, 0.20403, 0.21204, 0.23422, 0.22438, 0.25645, 0.27335, 0.28429, 0.27414, 0.26466, 0.36991, 0.29992, 0.29551, 0.37042, 0.29536, 0.24987, 0.28595, 0.30602, 0.33876, 0.31317, 0.33444, 0.31742, 0.27909, 0.32209, 0.28382, 0.2628, 0.27384, 0.21754, 0.24439, 0.27297, 0.26762, 0.17094, 0.17099, 0.17105, 0.15765, 0.13994, 0.10987, 0.09591, 0.097169, 0.0982, 0.092144, 0.11703, 0.12521, 0.12367, 0.11514, 0.15011, 0.14848, 0.14843], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté de communes": {
men: [0.29627, 0.30342, 0.4895, 0.49023, 0.40907, 0.43336, 0.55769, 0.43657, 0.25585, 0.17905, 0.17915, 0.18105, 0.15401, 0.15539, 0.11787, 0.11199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12049, 0.16725, 0.21344, 0.23219, 0.18329, 0.21559, 0.1935, 0.20815, 0.22461, 0.22455, 0.21334, 0.20879, 0.18998, 0.18721, 0.10643, 0.047248, 0.046352, 0.042356, 0.050291, 0, 0, 0, 0.0058155, 0.0058132, 0.023517, 0.023979, 0.053774, 0.062882, 0.067725, 0.081863, 0.047392, 0.051307, 0.050066, 0.099411, 0.15009, 0.14499, 0.16573, 0.17547, 0.16433, 0.16482, 0.18213, 0.17159, 0.15119, 0.14689, 0.19913, 0.24878, 0.24659, 0.23561, 0.22642, 0.23026, 0.23727, 0.23287, 0.24502, 0.24586, 0.21604, 0.22143, 0.25833, 0.28297, 0.29373, 0.24383, 0.2414, 0.20487, 0.13728, 0.11596, 0.075514, 0.075513, 0.034488, 0.028482, 0.026287, 0.027529, 0.027544, 0.024508, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 