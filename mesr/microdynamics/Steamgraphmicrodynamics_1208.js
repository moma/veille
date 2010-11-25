var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"tourisme vert": {
men: [0.31187, 0.3118, 0.35363, 0.3908, 0.1669, 0.16644, 0.14989, 0.14988, 0.14992, 0.14984, 0.14983, 0.14992, 0.1499, 0.14984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60066, 0.60054, 0.94356, 0.94336, 0.94467, 0.94507, 0.94487, 0.94464, 0.94443, 0.94934, 0.94945, 0.9495, 0.94944, 0.95, 0.94142, 0.9411, 0.94141, 0.94158, 0.94113, 0.94095, 0.94154, 0.94163, 0.94077, 0, 0, 0, 0, 0.94884, 0.72807, 0.72838, 0.72788, 0.72739, 0.72734, 0.72735, 0.72691, 0.72676, 0.72598, 0.72592, 0.72586, 0.72551, 0.72575, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lagon": {
men: [0, 0, 0, 0, 0, 0.69126, 0.79382, 0.86691, 0.86717, 0.86668, 0.87065, 0.87497, 0.87484, 0.4891, 0.47496, 0.47508, 0.47528, 0.48258, 0.48252, 0.20783, 0.22065, 0.11709, 0.11706, 0.11715, 0.087884, 0.060195, 0.06018, 0.1579, 0.16914, 0.1423, 0.14227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53779, 0.53798, 0.5381, 0.53837, 0.53858, 0.53872, 0.53945, 0.56684, 0.56697, 0.47477, 0.4749, 0.47448, 0.6614, 0.66037, 0, 0, 0, 0.25259, 0.45468, 0.45478, 0.45409, 0.52987, 0.52968, 0.953, 0.95277, 0.95274, 0.95225, 0.95343, 0.95317, 0.95277, 0.95268], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"blocs chirurgicaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060964, 0.06096, 0.060998, 0.060989, 0.078505, 0.93992, 0.94016, 0.94056, 0.94052, 0.94039, 0.94053, 0.9403, 0.94007, 0.93979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060348, 0.3075, 0.30759, 0.30765, 0.3075, 0.30745, 0.30764, 0.30767, 0.30739, 0.30732, 0.93419, 0.93447, 0.93448, 0.9335, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.37891, 0.37906, 0.37916, 0.94093, 0.94124, 0.94145, 0.94326, 0.94353, 0.94269, 0.94412, 0.94264, 0.94264, 0.9426, 0.94284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie touristique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4283, 0.59338, 0.59329, 0.68054, 0.68053, 0.6807, 0.68099, 0.73546, 0.73535, 0.9561, 0.95587, 0.95563, 0.95535, 0.95609, 0.95308, 0.9491, 0.94887, 0.94155, 0.94089, 0.47963, 0.47954, 0, 0, 0, 0.36017, 0.3601, 0.36001, 0.35993, 0.36007, 0.47703, 0.47705, 0.47702, 0.4773, 0.94205, 0.94174, 0.94204, 0.94221, 0.94176, 0.26032, 0.26048, 0.26051, 0.26027, 0.26021, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équilibre biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94827, 0.94815, 0.94792, 0.94716, 0.94649, 0.94568, 0.94549, 0.94533, 0.94514, 0.94645, 0.94685, 0.94665, 0.94642, 0.35612, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33874, 0.33871, 0.33855, 0.33866, 0.33891, 0.33883, 0.33867, 0.33881, 0.33878, 0.33897, 0.939, 0.93909, 0.93966, 0.94171, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93528, 0.9348, 0.93597, 0.93571, 0.93531, 0.93523], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pâturages": {
men: [0.30149, 0.22658, 0.32258, 0.27821, 0.27837, 0.31219, 0.28033, 0.25675, 0.21817, 0.24237, 0.24236, 0.18963, 0.1896, 0.23031, 0.12375, 0.12102, 0.12107, 0.12107, 0.12105, 0.043536, 0.043525, 0.045813, 0.045408, 0.040749, 0.036936, 0.039266, 0.035911, 0, 0, 0, 0, 0, 0, 0.048809, 0.050329, 0.050862, 0.049915, 0.054651, 0.058972, 0.056131, 0.059132, 0.061613, 0.06892, 0.065473, 0.074033, 0.094277, 0.094327, 0.034216, 0.054548, 0.054871, 0.061043, 0.051206, 0.050172, 0.047335, 0.064365, 0.084137, 0.1272, 0.13368, 0.11078, 0.13697, 0.1538, 0.1584, 0.15562, 0.1996, 0.20822, 0.21465, 0.2236, 0.26575, 0.24866, 0.31013, 0.30588, 0.34089, 0.5446, 0.49978, 0.48254, 0.46431, 0.48562, 0.37713, 0.37736, 0.53948, 0.61371, 0.66629, 0.81872, 0.76684, 0.76704, 0.95251, 0.79403, 0.7942, 0.79573, 0.22072, 0.22052, 0.40684, 0.478, 0.478, 0.29438, 0.25475, 0.20667, 0.20643, 0.20648, 0.26131, 0.24844, 0.24835, 0.24824, 0.29956, 0.29955, 0.20754, 0.11753, 0.15865, 0.20385, 0.20383], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés hospitalières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.29812, 0.2981, 0.29829, 0.50524, 0.50504, 0.93992, 0.94016, 0.94056, 0.94052, 0.94039, 0.94053, 0.9403, 0.94007, 0.93979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060102, 0.060089, 0.11744, 0.11742, 0.11746, 0.11747, 0.11748, 0.11747, 0.11754, 0.11761, 0.11757, 0.11761, 0.11763, 0.12674, 0.9406, 0.94118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49554, 0.49524, 0.69319, 0.69245, 0.6924, 0.9441, 0.94364, 0.94395, 0.94465, 0.94442, 0.94397, 0.94436, 0.94428, 0.94482, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"cercle polaire": {
men: [0, 0, 0, 0, 0.019842, 0.019786, 0.019781, 0.01978, 0.20337, 0.20326, 0.17209, 0.1722, 0.17217, 0.17211, 0.34296, 0.34305, 0.23391, 0.2339, 0.21749, 0.21752, 0.21747, 0.21742, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94597, 0.9459, 0.94582, 0.94536, 0.94567, 0.94638, 0.95272, 0.95227, 0.95267, 0.95259, 0.95312, 0.95344, 0.95353, 0.95411, 0.94958, 0.94991, 0.95399, 0.95447, 0.48906, 0.48919, 0.24524, 0.24532, 0.24538, 0.24585, 0.24592, 0.2457, 0.24607, 0.24569, 0.24569, 0.24568, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"friches industrielles": {
men: [0.24106, 0.3593, 0.35911, 0.35898, 0.35919, 0, 0, 0, 0, 0.68397, 0.68392, 0.68435, 0.68425, 0.95164, 0.9538, 0.26017, 0.26028, 0.1749, 0.17488, 0.1749, 0.14726, 0.14722, 0.14718, 0.033804, 0.19457, 0.19454, 0.1945, 0.19434, 0.17059, 0.28393, 0.28388, 0.51308, 0.51297, 0.51368, 0.95439, 0.89693, 0.89671, 0.89651, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.059565, 0.056832, 0.07755, 0.12098, 0.12096, 0.10805, 0.11076, 0.10477, 0.10466, 0.11939, 0.10345, 0.10338, 0.10857, 0.10425, 0.16525, 0.17008, 0.25926, 0.2962, 0.29618, 0.34358, 0.34342, 0.40903, 0.40934, 0.35689, 0.44314, 0.44333, 0.58827, 0.65797, 0.52415, 0.5242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14354, 0.096221, 0.070991, 0.10279, 0.10278, 0.10273, 0.10286, 0.084003, 0.083968, 0.08396], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ferme éolienne": {
men: [0, 0, 0, 0.27848, 0.27864, 0.94047, 0.94023, 0.94016, 0.94044, 0.93991, 0.93985, 0.94928, 0.94914, 0.94878, 0.94876, 0.4508, 0.45099, 0.3352, 0.33515, 0.18742, 0.18737, 0.18733, 0.18727, 0.18741, 0.18736, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38956, 0.38969, 0.38976, 0.32342, 0.32336, 0.32356, 0.32359, 0.1913, 0.21001, 0.21, 0.21006, 0.21006, 0.26926, 0.26922, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14877, 0.1487, 0.14875, 0.14886, 0.14882, 0.20381, 0.2039, 0.57875, 0.57908, 0.29081, 0.22959, 0.22973, 0.23023, 0.23031, 0.11007, 0.11013, 0.10237, 0.1024, 0.10254, 0.10258, 0.1026, 0.10279, 0.10282, 0.15684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zone montagneuse": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.05214, 0.062481, 0.067765, 0.067746, 0.067737, 0.067721, 0.067666, 0.07465, 0.11497, 0.11495, 0.11711, 0.18684, 0.1871, 0.34273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.26924, 0.93408, 0.93384, 0.9334, 0.93379, 0.93371, 0.93424, 0.93455, 0.93464, 0.18297, 0.10163, 0.10166, 0.10169, 0.10174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94391, 0.94248, 0.94265, 0.94232, 0.94189, 0.94167, 0.94163, 0.94115, 0.94232, 0.94206, 0.94166, 0.94158], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biodiversité terrestre": {
men: [0, 0, 0, 0, 0, 0.97585, 0.97561, 0.97726, 0.97755, 0.977, 0.97694, 0.97755, 0.9774, 0.97703, 0.97701, 0.97726, 0.97767, 0.97763, 0.9775, 0.95998, 0.95975, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19646, 0.19642, 0.1965, 0.19652, 0.19653, 0.19652, 0.19663, 0.19675, 0.19668, 0.19674, 0.19678, 0.94409, 0.94391, 0.9445, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêts subtropicales": {
men: [0, 0, 0, 0, 0, 0.97443, 0.97418, 0.97411, 0.97475, 0.97421, 0.97415, 0.97475, 0.97461, 0.97424, 0.97422, 0.97446, 0.97488, 0.97484, 0.9747, 0.94294, 0.94271, 0.94248, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"traumatisme crânien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9516, 0.95083, 0.95016, 0.94935, 0.94916, 0.949, 0.9488, 0.95013, 0.95052, 0.52268, 0.52255, 0.52243, 0.52264, 0.5227, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92748, 0.92888, 0.92743, 0.92743, 0.92739, 0.92763, 0.92868, 0.92762, 0.92782, 0.92641, 0.015794, 0.015788, 0.015781, 0.015778, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"forêt française": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93761, 0.93681, 0.93663, 0.93647, 0.93628, 0.93758, 0.94479, 0.94458, 0.94436, 0.94415, 0.94452, 0.94462, 0.94468, 0.94461, 0.93892, 0.93947, 0.93915, 0.93946, 0.93962, 0.93918, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"désastre naturel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03452, 0.031925, 0.031917, 0.031907, 0.031932, 0.031923, 0.031919, 0.031911, 0.031885, 0.078981, 0.1254, 0.15711, 0.40126, 0.40118, 0.48512, 0.94351, 0.94748, 0.94725, 0.94704, 0.94741, 0.94752, 0.94757, 0.94751, 0.94474, 0.94529, 0.94498, 0.93889, 0.93906, 0.93861, 0.93843, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise technique": {
men: [0, 0.25795, 0.25781, 0.25772, 0.25787, 0.25715, 0.25708, 0.94257, 0.94285, 0.94232, 0.94226, 0.94285, 0.94271, 0.94235, 0.94233, 0, 0, 0, 0, 0, 0, 0.9407, 0.94041, 0.94114, 0.94088, 0.94076, 0.94053, 0.067664, 0.03539, 0.035359, 0.031525, 0.031519, 0.031513, 0.029503, 0.029515, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091052, 0.084654, 0.077552, 0.077546, 0.077539, 0.093196, 0.077104, 0.060093, 0.048711, 0.048688, 0.050811, 0.050807, 0.039387, 0.0394, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13153, 0.13156, 0.11959, 0.11961, 0.11957, 0.11951, 0.11949, 0.11948, 0.11942, 0.11957, 0.36474, 0.36458, 0.36455], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réseau téléphonique": {
men: [0, 0, 0.78243, 0.60265, 0.70335, 0.70139, 0.70121, 0.70116, 0.49854, 0.49827, 0.42013, 0.42039, 0.30776, 0.30764, 0.30764, 0.30771, 0, 0, 0.17124, 0.17126, 0.17122, 0.17118, 0.23149, 0.23166, 0.29951, 0.29947, 0.94811, 0.94734, 0.94667, 0.94586, 0.94567, 0.94552, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.064419, 0.066198, 0.066287, 0.06631, 0.066324, 0.066452, 0.066471, 0.066412, 0.085136, 0.22974, 0.22974, 0.22973, 0.22979, 0.23005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"étalement urbain": {
men: [0.1225, 0.12248, 0.1163, 0.10359, 0.10365, 0.10336, 0.11112, 0.11111, 0.10256, 0.14784, 0.14783, 0.18309, 0.18306, 0.20784, 0.18491, 0.2443, 0.26386, 0.30991, 0.30987, 0.30991, 0.41975, 0.41965, 0.5048, 0.42646, 0.56755, 0.56747, 0.56734, 0.66059, 0.66012, 0.5671, 0.39374, 0.33454, 0.33447, 0.18251, 0.18259, 0.17745, 0.17741, 0.17737, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.018382, 0.02146, 0.022345, 0.022342, 0.022575, 0.054945, 0.06786, 0.091365, 0.27198, 0.27182, 0.21892, 0.21868, 0.21867, 0.21865, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22308, 0.24759, 0.31397, 0.31408, 0.31415, 0.35937, 0.26894, 0.27013, 0.24674, 0.23291, 0.23291, 0.24444, 0.2445, 0.28743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"zones inondées": {
men: [0, 0, 0, 0, 0, 0, 0, 0.38976, 0.38988, 0.38966, 0.38964, 0.38988, 0.38982, 0.38967, 0.36508, 0.36517, 0.36533, 0.26725, 0.25816, 0.31548, 0.42587, 0, 0, 0, 0, 0, 0, 0, 0, 0.1244, 0.22126, 0.68731, 0.94829, 0.94961, 0.95001, 0.94981, 0.94958, 0.94936, 0.94974, 0.94984, 0.9499, 0.94984, 0.36789, 0.22665, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"patrimoine naturel": {
men: [0.24671, 0.22303, 0.22291, 0.22283, 0.2583, 0.35645, 0.16762, 0.15289, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091265, 0.087231, 0.19211, 0.19219, 0.19215, 0.29351, 0.30854, 0.34177, 0.3418, 0.42865, 0.3516, 0.36316, 0.38601, 0.4068, 0.33505, 0.31754, 0.1051, 0.085515, 0.034276, 0, 0.045339, 0.045329, 0.045326, 0.04534, 0.048215, 0.049812, 0.049805, 0.050498, 0.050463, 0.052152, 0.051594, 0.055884, 0.1683, 0.20654, 0.35107, 0.40467, 0.40463, 0.38294, 0.38307, 0.30106, 0.30099, 0.28696, 0.28709, 0.28706, 0.40265, 0.31295, 0.31298, 0.29717, 0.09183, 0, 0.039683, 0.034626, 0.03259, 0.045208, 0.045269, 0.31639, 0.21786, 0.21828, 0.20444, 0.22697, 0.22414, 0.22987, 0.22987, 0.22986, 0.21929, 0.22619, 0.22275, 0.21551, 0.20568, 0, 0, 0, 0, 0, 0, 0.042279, 0.042268, 0.04225, 0.042246], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"submersions marines": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23425, 0.23425, 0.93601, 0.93587, 0.93628, 0.93563, 0.935, 0.93493, 0.93494, 0.93438, 0.93419, 0.93318, 0.93311, 0.93303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.39241, 0.94016, 0.9399, 0.93951, 0.93942], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture bretonne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48463, 0.29978, 0.29972, 0.29983, 0.29987, 0.29988, 0.42899, 0.42924, 0.4295, 0.30897, 0.25836, 0.25841, 0.16975, 0.16971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48102, 0.48092, 0.48041, 0.48037, 0.93883, 0.93837, 0.93868, 0.93938, 0.93915, 0.9387, 0.93909, 0.93901, 0.93954, 0.93986, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dégâts environnementaux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9449, 0.94545, 0.946, 0.94568, 0.94599, 0.94616, 0.70928, 0.70915, 0.70959, 0.56532, 0.56481, 0.52457, 0.52453, 0.52469, 0, 0, 0, 0, 0, 0, 0, 0, 0.38056, 0.27084, 0.27055, 0.28222, 0.2822, 0.28206, 0.28215, 0.14858, 0.14855, 0.13885, 0.13891, 0.1389, 0.13897, 0.16164, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.096166, 0.096187, 0.096041, 0.13891, 0.13887, 0.174, 0.17396, 0.12438, 0.12432, 0.12448, 0.2533, 0.2673, 0.28306], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"richesses naturelles": {
men: [0, 0, 0, 0, 0, 0.27643, 0.23039, 0.33102, 0.33112, 0.28825, 0.23926, 0.21625, 0.21622, 0.21614, 0.18584, 0.18087, 0.16921, 0.1692, 0.16918, 0, 0, 0, 0, 0, 0.01665, 0.018781, 0.018777, 0.018762, 0.025551, 0.027107, 0.032226, 0.019172, 0.019168, 0.20326, 0.31675, 0.11799, 0.11796, 0.11793, 0.099885, 0.099896, 0.1107, 0.11069, 0.11075, 0.11082, 0.11078, 0.13936, 0.13938, 0.022862, 0.022858, 0.47518, 0.26643, 0.26619, 0.32491, 0.25618, 0.25024, 0.25024, 0.43156, 0.4315, 0.43169, 0.36478, 0.36454, 0.36451, 0.36452, 0.24557, 0.38994, 0.38952, 0.34106, 0.45933, 0.45911, 0.40034, 0, 0, 0, 0.06448, 0.064475, 0.064511, 0.0554, 0.055405, 0.042238, 0.038139, 0.046388, 0.046398, 0.010443, 0.0095987, 0.010148, 0.0554, 0.050829, 0.041591, 0.040756, 0.037678, 0.038424, 0.038483, 0.03611, 0.033623, 0.033621, 0.03363, 0.071445, 0.080305, 0.12884, 0.064067, 0.075048, 0.077066, 0.080902, 0.09956, 0.099556, 0.073865, 0.097736, 0.13806, 0.13801, 0.13799], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sables mouvants": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.088362, 0.088269, 0.19412, 0.48518, 0.9384, 0.93778, 0.93771, 0.93772, 0.93715, 0.93696, 0.93595, 0.93588, 0.9358, 0.93535, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19369, 0.16209, 0.16214, 0.37945, 0.37958, 0.37966, 0.38039, 0.3805, 0.38016, 0.38074, 0.38014, 0.38014, 0.48536, 0.48549, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"maladie tropicale": {
men: [0, 0, 0, 0, 0.92387, 0.9213, 0.92107, 0.921, 0.92127, 0.92076, 0.9207, 0.92127, 0.022196, 0.022188, 0.022187, 0.022193, 0.022202, 0.022201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20983, 0.47951, 0.47967, 0.48003, 0.47991, 0.47968, 0.53233, 0.54096, 0.58938, 0.61634, 0.6391, 0.49325, 0.4372, 0.42663, 0.38983, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"milieu marin": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19044, 0.1904, 0.19035, 0.27585, 0.35611, 0.35601, 0.35597, 0.35588, 0.94327, 0.57295, 0.37451, 0.37444, 0.37438, 0.3743, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.035705, 0.04302, 0.046928, 0.047252, 0.052728, 0.052723, 0.049375, 0.05681, 0.19835, 0.1983, 0.19776, 0.18654, 0.18371, 0.17263, 0.16023, 0.16025, 0.16879, 0.1615, 0.16156, 0.16159, 0.17776, 0.17014, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94571, 0.94588, 0.94555, 0.94513, 0.57369, 0.57367, 0.57338, 0.3371, 0.22615, 0.22606, 0.22603], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"perspectives économiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.23634, 0.18405, 0.18419, 0.18414, 0.18411, 0.18407, 0.26404, 0.29344, 0.38433, 0.24134, 0.2413, 0.24125, 0.28392, 0.28404, 0.17885, 0.21719, 0.21715, 0.21723, 0.21726, 0.21727, 0.53748, 0.67921, 0.51759, 0.57756, 0.57774, 0.57785, 0.52618, 0.52608, 0.5264, 0.53971, 0.53922, 0.54854, 0.56049, 0.56066, 0.37908, 0.13282, 0.15333, 0.1771, 0.17697, 0.17685, 0.22105, 0.22105, 0.22092, 0.13947, 0.11343, 0.067958, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 