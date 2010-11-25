var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"dioxyde de carbone": {
men: [0.38495, 0.4248, 0.44028, 0.43093, 0.41445, 0.36163, 0.24069, 0.24723, 0.20273, 0.27415, 0.29344, 0.20867, 0.26624, 0.27881, 0.22386, 0.39631, 0.38985, 0.38442, 0.39576, 0.36739, 0.4548, 0.45465, 0.45484, 0.48142, 0.51231, 0.57219, 0.59741, 0.6063, 0.67596, 0.47376, 0.42791, 0.44619, 0.44609, 0.49929, 0.47619, 0.43657, 0.44507, 0.33312, 0.28532, 0.27356, 0.19572, 0.18496, 0.18734, 0.209, 0.2038, 0.20377, 0.19584, 0.20719, 0.27419, 0.30869, 0.38109, 0.53289, 0.53274, 0.57455, 0.57018, 0.54507, 0.56461, 0.38484, 0.39324, 0.39332, 0.43659, 0.40795, 0.34848, 0.32925, 0.24887, 0.16049, 0.17261, 0.16242, 0.16056, 0.15688, 0.28473, 0.30287, 0.34195, 0.28623, 0.25295, 0.25937, 0.28622, 0.29367, 0.31516, 0.29875, 0.28572, 0.29696, 0.3478, 0.34992, 0.33913, 0.39721, 0.39558, 0.43465, 0.43742, 0.56335, 0.58692, 0.64278, 0.56941, 0.62594, 0.63428, 0.62446, 0.62127, 0.64773, 0.64015, 0.63693, 0.63013, 0.66765, 0.66763, 0.50108, 0.51267, 0.44616, 0.48238, 0.42641, 0.41213, 0.4205], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduire les émissions": {
men: [0.35478, 0.3732, 0.36627, 0.35626, 0.36129, 0.33869, 0.28844, 0.31364, 0.27785, 0.25787, 0.2466, 0.2545, 0.20335, 0.15276, 0.18427, 0.38396, 0.43342, 0.43778, 0.43686, 0.4744, 0.58739, 0.53677, 0.54629, 0.56237, 0.56231, 0.54131, 0.60026, 0.60034, 0.59472, 0.46403, 0.52595, 0.52592, 0.52581, 0.54215, 0.55979, 0.56722, 0.47568, 0.48036, 0.48049, 0.50273, 0.56381, 0.42615, 0.46758, 0.43062, 0.34422, 0.34417, 0.32292, 0.30179, 0.27077, 0.27328, 0.32506, 0.2535, 0.26195, 0.27073, 0.25552, 0.2989, 0.32081, 0.3023, 0.33393, 0.33327, 0.3402, 0.33547, 0.33757, 0.33448, 0.30181, 0.3434, 0.31372, 0.29415, 0.23607, 0.24188, 0.24105, 0.304, 0.34404, 0.29977, 0.29324, 0.25953, 0.26975, 0.27458, 0.28668, 0.28541, 0.28968, 0.28978, 0.30293, 0.31557, 0.30351, 0.26977, 0.22047, 0.24246, 0.2568, 0.3304, 0.29764, 0.26083, 0.31295, 0.41696, 0.42735, 0.43897, 0.45533, 0.47295, 0.43394, 0.43729, 0.42421, 0.4469, 0.45076, 0.37736, 0.44365, 0.48248, 0.42472, 0.34338, 0.34362, 0.35009], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"méthane": {
men: [0.12263, 0.12606, 0.099419, 0.14747, 0.18773, 0.23198, 0.23949, 0.23815, 0.2396, 0.2826, 0.41031, 0.45749, 0.47655, 0.48169, 0.43557, 0.52424, 0.56648, 0.5207, 0.42131, 0.57041, 0.58482, 0.68659, 0.69212, 0.66642, 0.70207, 0.70199, 0.65602, 0.57882, 0.56578, 0.51392, 0.5459, 0.5318, 0.60322, 0.50593, 0.46484, 0.32127, 0.31106, 0.30405, 0.30413, 0.30418, 0.31997, 0.38998, 0.40854, 0.3988, 0.35396, 0.37817, 0.19603, 0.012121, 0.013921, 0, 0, 0.18123, 0.30641, 0.30638, 0.35419, 0.35363, 0.3298, 0.44857, 0.35282, 0.35289, 0.35292, 0.31125, 0.31119, 0.29894, 0.28289, 0.23191, 0.16915, 0.16911, 0.11095, 0.19515, 0.20891, 0.083017, 0.15016, 0.11803, 0.11474, 0.20917, 0.15841, 0.15744, 0.15501, 0.15057, 0.15061, 0.15065, 0.21095, 0.18875, 0.20759, 0.24029, 0.22747, 0.29376, 0.29958, 0.22191, 0.34887, 0.36418, 0.37722, 0.41259, 0.44215, 0.41174, 0.32789, 0.3278, 0.28967, 0.20438, 0.1863, 0.15624, 0.14716, 0.14889, 0.13967, 0.13649, 0.14256, 0.11952, 0.080585, 0.086119], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz carbonique": {
men: [0.2833, 0.33389, 0.27176, 0.26439, 0.26603, 0.24162, 0.27107, 0.24352, 0.24773, 0.2684, 0.28452, 0.24448, 0.18482, 0.14867, 0.15244, 0.15261, 0.23832, 0.2885, 0.25422, 0.29183, 0.29599, 0.32008, 0.32021, 0.33971, 0.33968, 0.35569, 0.39893, 0.39179, 0.42514, 0.41182, 0.36463, 0.30424, 0.38409, 0.42599, 0.3986, 0.36329, 0.36302, 0.3062, 0.2708, 0.27084, 0.24408, 0.2387, 0.17986, 0.4405, 0.40572, 0.42638, 0.32872, 0.26625, 0.25141, 0.2322, 0.243, 0.22667, 0.25503, 0.25501, 0.22157, 0.22028, 0.22035, 0.13674, 0.13684, 0.12059, 0.13477, 0.20229, 0.21643, 0.23354, 0.22339, 0.19608, 0.34935, 0.34928, 0.43241, 0.35052, 0.35008, 0.34202, 0.35219, 0.33597, 0.341, 0.34846, 0.36009, 0.40049, 0.40072, 0.3832, 0.29495, 0.29503, 0.3468, 0.47205, 0.52548, 0.50372, 0.4968, 0.52069, 0.51447, 0.5017, 0.48937, 0.46308, 0.43487, 0.5335, 0.51211, 0.49701, 0.4327, 0.37614, 0.29652, 0.20281, 0.20683, 0.11244, 0.11537, 0.11307, 0.11228, 0.13876, 0.1407, 0.14789, 0.15061, 0.15272], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gaz à effet de serre": {
men: [0.42417, 0.41665, 0.43515, 0.43605, 0.43657, 0.34738, 0.3291, 0.31043, 0.32197, 0.18607, 0.18077, 0.16928, 0.15347, 0.13811, 0.12002, 0.16144, 0.1947, 0.21294, 0.20597, 0.23173, 0.22582, 0.23786, 0.25773, 0.25721, 0.28182, 0.29193, 0.30019, 0.34572, 0.33829, 0.34409, 0.38371, 0.37695, 0.4264, 0.47221, 0.48739, 0.49452, 0.44054, 0.36443, 0.35088, 0.35886, 0.37014, 0.35837, 0.33333, 0.29133, 0.19698, 0.21143, 0.16867, 0.10252, 0.035419, 0.083718, 0.098057, 0.13253, 0.13321, 0.1332, 0.13438, 0.15463, 0.18038, 0.18149, 0.16662, 0.15699, 0.16553, 0.15951, 0.16658, 0.14468, 0.15348, 0.13955, 0.13567, 0.14685, 0.13344, 0.11742, 0.10943, 0.1664, 0.22853, 0.23241, 0.24973, 0.26918, 0.28515, 0.31086, 0.30069, 0.28463, 0.28595, 0.28513, 0.30993, 0.31005, 0.29378, 0.28655, 0.24839, 0.24548, 0.20797, 0.2682, 0.24241, 0.22812, 0.33889, 0.40425, 0.41681, 0.41812, 0.41932, 0.40801, 0.43856, 0.42042, 0.42499, 0.42782, 0.44611, 0.42997, 0.49954, 0.49964, 0.44628, 0.41679, 0.37407, 0.36778], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"émissions de gaz à effet de serre": {
men: [0.16754, 0.19782, 0.22464, 0.23427, 0.23461, 0.23088, 0.17415, 0.18041, 0.18567, 0.19968, 0.19551, 0.19563, 0.18711, 0.15799, 0.14453, 0.34456, 0.42983, 0.43129, 0.43521, 0.49425, 0.47075, 0.48352, 0.48234, 0.48165, 0.47728, 0.47348, 0.57794, 0.55902, 0.50773, 0.43573, 0.35988, 0.35986, 0.34622, 0.23808, 0.23633, 0.18647, 0.18962, 0.21115, 0.2075, 0.20709, 0.19904, 0.21562, 0.25156, 0.20227, 0.2007, 0.20681, 0.2022, 0.19362, 0.18683, 0.16434, 0.17679, 0.15899, 0.15601, 0.15879, 0.1759, 0.20083, 0.21054, 0.22259, 0.22622, 0.21669, 0.22107, 0.22133, 0.23676, 0.28133, 0.29586, 0.30768, 0.30019, 0.31137, 0.24406, 0.17901, 0.16541, 0.16963, 0.1658, 0.16607, 0.17367, 0.19486, 0.20501, 0.20218, 0.18842, 0.1899, 0.19199, 0.1849, 0.19694, 0.20128, 0.21291, 0.2133, 0.19347, 0.19567, 0.19399, 0.18264, 0.16022, 0.1463, 0.17471, 0.23007, 0.2219, 0.22065, 0.21751, 0.25735, 0.21667, 0.20683, 0.22435, 0.23301, 0.23176, 0.25299, 0.27708, 0.34883, 0.35286, 0.3227, 0.33659, 0.34819], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"carbone": {
men: [0.27248, 0.26921, 0.26758, 0.26474, 0.26512, 0.25753, 0.23623, 0.20034, 0.16689, 0.16292, 0.15833, 0.14099, 0.12474, 0.088294, 0.099544, 0.17842, 0.20839, 0.21058, 0.22032, 0.27083, 0.29356, 0.28907, 0.30767, 0.35657, 0.37932, 0.38164, 0.39355, 0.41966, 0.39319, 0.3519, 0.38606, 0.39902, 0.38941, 0.36137, 0.39372, 0.37615, 0.35523, 0.30785, 0.3041, 0.30382, 0.29051, 0.26276, 0.27491, 0.27057, 0.20129, 0.20126, 0.20883, 0.16777, 0.11145, 0.13344, 0.14456, 0.16122, 0.16558, 0.16885, 0.16745, 0.14352, 0.14495, 0.13354, 0.12963, 0.13236, 0.13027, 0.13401, 0.14802, 0.13936, 0.12605, 0.12637, 0.12159, 0.12593, 0.1048, 0.12877, 0.14664, 0.18123, 0.23498, 0.22685, 0.23099, 0.23657, 0.23247, 0.22231, 0.22484, 0.22618, 0.22785, 0.2215, 0.21714, 0.22635, 0.23421, 0.21244, 0.17809, 0.17538, 0.16677, 0.18845, 0.17807, 0.18817, 0.19469, 0.19925, 0.19616, 0.20012, 0.23298, 0.21169, 0.17527, 0.17373, 0.17202, 0.19086, 0.19731, 0.17249, 0.19529, 0.20236, 0.22011, 0.21538, 0.21768, 0.21175], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protocole de Kyoto": {
men: [0.25437, 0.25458, 0.25458, 0.2545, 0.25448, 0.17417, 0.13758, 0.09531, 0.040387, 0.038487, 0.031351, 0.03137, 0.01659, 0, 0.01231, 0.1418, 0.17073, 0.17077, 0.17078, 0.22015, 0.25377, 0.2697, 0.26317, 0.26567, 0.28999, 0.28996, 0.65033, 0.77266, 0.76553, 0.6212, 0.44485, 0.40428, 0.4042, 0.1314, 0.089818, 0.089908, 0.095489, 0.078497, 0.078519, 0.078532, 0.078158, 0.0758, 0.081456, 0.081454, 0.11595, 0.12071, 0.1071, 0.11791, 0.16919, 0.15225, 0.1663, 0.20664, 0.20658, 0.25902, 0.26361, 0.24264, 0.28585, 0.21006, 0.15735, 0.15738, 0.16223, 0.14315, 0.10213, 0.10186, 0.085407, 0.087637, 0.087626, 0.040323, 0.035159, 0.055661, 0.083059, 0.10308, 0.22843, 0.20463, 0.32904, 0.27947, 0.2771, 0.26428, 0.20771, 0.20458, 0.20463, 0.21076, 0.23857, 0.21981, 0.22775, 0.22502, 0.18272, 0.17894, 0.12269, 0.13633, 0.12043, 0.09341, 0.22664, 0.19095, 0.17167, 0.16889, 0.12927, 0.15411, 0.12767, 0.12923, 0.12764, 0.15412, 0.15353, 0.18163, 0.16177, 0.23997, 0.15984, 0.16675, 0.19466, 0.19988], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"climatologues": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.087551, 0.084751, 0.084291, 0.088421, 0.093343, 0.093348, 0.12045, 0.16018, 0.17094, 0.21147, 0.17225, 0.18025, 0.18023, 0.21853, 0.33637, 0.22793, 0.22868, 0.22893, 0.22892, 0.22887, 0.11002, 0.12692, 0.1122, 0.1031, 0.10237, 0.094185, 0.089279, 0.089333, 0.064769, 0.075792, 0.069439, 0.069374, 0.069364, 0.069367, 0.090549, 0, 0, 0.030359, 0.28145, 0.3532, 0.42835, 0.18701, 0.28575, 0.25502, 0.22759, 0.22775, 0.22444, 0.22446, 0.26103, 0.26097, 0.27031, 0.27533, 0.2011, 0.19698, 0.19694, 0.2267, 0.097816, 0.1375, 0.1851, 0.19728, 0.20245, 0.2073, 0.10375, 0.10042, 0.081885, 0.081933, 0.076972, 0.079044, 0.1001, 0.14095, 0.22599, 0.16533, 0.14926, 0.12148, 0.11982, 0.11351, 0.15007, 0.14886, 0.14439, 0.45823, 0.53196, 0.51352, 0.49257, 0.51384, 0.4436, 0.47691, 0.48405, 0.51913, 0.50382, 0.49982, 0.49568, 0.50588, 0.51188, 0.34023, 0.22873, 0.22951, 0.23181], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bonus écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0.54143, 0.54138, 0.542, 0.54198, 0.54231, 0.54278, 0.5439, 0.96678, 0.96154, 0.96049, 0.96068, 0.96072, 0.95868, 0.9594, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30596, 0.30595, 0.30566, 0.30562, 0.26911, 0.21621, 0.21628, 0.19581, 0.16501, 0.16504, 0.165, 0.16498, 0.16482, 0.65002, 0.53391, 0.53369, 0.53406, 0.53417, 0.56368, 0.63544, 0.63531, 0.7163, 0.71604, 0.45163, 0.45157, 0.45149, 0.52076, 0.34215, 0.31006, 0.30982, 0.30941, 0.30936, 0.30152, 0.30135, 0.30125, 0.25304, 0.30242, 0.47641, 0.57839, 0.57854, 0.47264, 0.47265, 0.8435, 0.84426, 0.84543, 0.84554, 0.95897, 0.95941, 0.96057, 0.96142, 0.95522, 0.96235, 0.95736, 0.95693, 0.95695, 0.95667, 0.95704, 0.95683, 0.25173, 0.25167, 0.25166, 0.25157, 0.18365, 0.14002, 0.13704, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réactions chimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0.081983, 0.22347, 0.22372, 0.22371, 0.22385, 0.22405, 0.2636, 0.26356, 0.2816, 0.28129, 0.33983, 0.33985, 0.41641, 0.69318, 0.57706, 0, 0, 0, 0, 0, 0, 0, 0, 0.54545, 0.54542, 0.5453, 0.65245, 0.43359, 0.2689, 0.26869, 0.26843, 0.2468, 0.24684, 0.24699, 0.25104, 0.26238, 0.26237, 0.11439, 0.11437, 0.10183, 0.014339, 0.018074, 0, 0.2016, 0.20164, 0.23442, 0.2344, 0.23417, 0.22045, 0.22051, 0.22042, 0.1919, 0.19194, 0.23269, 0.23272, 0.23267, 0.32334, 0.3321, 0.28895, 0.28891, 0.24972, 0.21742, 0.25177, 0.25145, 0.25125, 0.35126, 0.35121, 0.35095, 0.35075, 0.27873, 0.40438, 0.25219, 0.2854, 0.28546, 0.35764, 0.49594, 0.49595, 0.49603, 0.49648, 0.49717, 0.49723, 0.49759, 0.49782, 0.94861, 0.95753, 0.61807, 0.61633, 0.61587, 0.61559, 0.629, 0.54407, 0.46329, 0.46319, 0.46306, 0.46296, 0.46294, 0.46278, 0.53938, 0.27511, 0.4198, 0.42069, 0.42099, 0.42114], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biohacker": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.92592, 0.9258, 0.92562, 0.92655, 0.92943, 0.92825, 0.92752, 0.92629, 0.92617, 0.93843, 0.9379, 0.93758, 0.93725, 0.9378, 0.935, 0.93521, 0.93545, 0.93515, 0.94112, 0.94128, 0.94213, 0.94343, 0.94356, 0.93714, 0.93757, 0.9387, 0.93954, 0.93556, 0.93294, 0.93224, 0.93182, 0.93184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bioterrorisme": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93574, 0.93522, 0.9349, 0.93457, 0.93512, 0.935, 0.93521, 0.93545, 0.93515, 0.94112, 0.94128, 0.94213, 0.94343, 0.94356, 0.93714, 0.93757, 0.9387, 0.93954, 0.93556, 0.93294, 0.93224, 0.93182, 0.93184, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"calotte": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15306, 0.15281, 0.94262, 0.94224, 0.9429, 0.9431, 0.94318, 0.94328, 0.94308, 0.94397, 0.94363, 0.94398, 0.94386, 0.94368, 0, 0, 0, 0, 0, 0.057401, 0.057358, 0.057326, 0.057306, 0.057286, 0.057319, 0.057312, 0.057325, 0.05734, 0.057321, 0.057322, 0.049826, 0.049871, 0.04994, 0, 0, 0.27189, 0.27222, 0.27246, 0.73488, 0.8027, 0.8133, 0.81294, 0.66684, 0.67568, 0.72827, 0.72811, 0.70578, 0.70564, 0.70561, 0.69685, 0.69612, 0.69546, 0.61834, 0.21799, 0.091987, 0.07945], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère industrielle": {
men: [0, 0, 0, 0.17462, 0.93851, 0.94013, 0.93965, 0.94063, 0.94055, 0.94163, 0.94159, 0.94217, 0.18426, 0.18464, 0.41529, 0.41304, 0.37636, 0.28111, 0.28112, 0.39629, 0.39659, 0.39646, 0.39662, 0.37978, 0.3611, 0.36106, 0.53787, 0.53795, 0.38615, 0.38742, 0.16889, 0.13201, 0.13198, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11427, 0.17233, 0.17234, 0.17232, 0.1248, 0.12461, 0.1246, 0.12462, 0.12459, 0.12458, 0.12446, 0.18152, 0.30426, 0.17161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11722, 0.11738, 0.1174, 0.11748, 0.18817, 0.1884, 0.18857, 0.18777, 0.25436, 0.30241, 0.30227, 0.44734, 0.44721, 0.44738, 0.33324, 0.33315, 0.33308, 0.33307, 0.54927, 0.47216, 0.4006, 0.35254, 0.244, 0.32091, 0.32102], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"captage": {
men: [0.34689, 0.28821, 0.28821, 0.25714, 0.25906, 0.21912, 0.12646, 0.13545, 0.18012, 0.10201, 0.102, 0.091315, 0.10791, 0.081304, 0.095732, 0.086274, 0.26308, 0.32438, 0.32059, 0.30753, 0.33211, 0.33201, 0.26131, 0.35238, 0.35234, 0.42081, 0.43939, 0.47413, 0.47411, 0.51498, 0.26265, 0.26264, 0.26258, 0.54172, 0.54138, 0.53228, 0.63089, 0.50561, 0.50575, 0.34999, 0.40958, 0.40861, 0.3482, 0.36984, 0.33751, 0.33747, 0.29984, 0.013389, 0.010022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04391, 0.038765, 0.038801, 0.035064, 0.046547, 0.044037, 0.046293, 0.12753, 0.17798, 0.1143, 0.085663, 0.11604, 0.11602, 0.11499, 0.10723, 0.11256, 0.10814, 0.12172, 0.11792, 0.11972, 0.11976, 0.10164, 0.082443, 0.16205, 0.26874, 0.19613, 0.1911, 0.19475, 0.17509, 0.21869, 0.23665, 0.28647, 0.2861, 0.27767, 0.27755, 0.19659, 0.20167, 0.11204, 0.13148, 0.16837, 0.17453, 0.17452, 0.20034, 0.27163, 0.3565, 0.3854, 0.37896, 0.38903, 0.38917], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût environnemental": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.56261, 0.56304, 0.56286, 0.56309, 0.47937, 0.47932, 0.47927, 0.37969, 0.30161, 0.26295, 0.24106, 0.2194, 0.20217, 0.20212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16192, 0.18657, 0.18628, 0.18626, 0.2366, 0.23654, 0.23652, 0.23629, 0.23591, 0.23598, 0.23589, 0.9442, 0.9444, 0.94448, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95063, 0.9505, 0.94979, 0.94926, 0.94894, 0.67757, 0.44618, 0.44613, 0.33975, 0.33984, 0.27841, 0.27841, 0.27846, 0.27871, 0, 0, 0.08466, 0.084699, 0.084802, 0.099979, 0.14716, 0.12454, 0.19817, 0.19808, 0.43711, 0.43698, 0.46053, 0.22373, 0.22367, 0.22362, 0.15665, 0.13252, 0.13238, 0.13225, 0.13247, 0.14566, 0.14576, 0.14581], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby pétrolier": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40829, 0.28714, 0.17581, 0.2325, 0.23257, 0.2326, 0.23274, 0.39956, 0.3992, 0.39919, 0.39882, 0.39876, 0.39878, 0.39875, 0.26872, 0.34794, 0.94228, 0.94247, 0.9422, 0.28743, 0.28715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.046292, 0.061993, 0.062056, 0.062248, 0.062169, 0.5051, 0.50444, 0.50437, 0.50399, 0.50371, 0.50354, 0.054241, 0.16717, 0.16714, 0.12269, 0.12272, 0.12268, 0.12268, 0.1227, 0.12281, 0.12298, 0.123, 0.12309, 0.12314, 0.12329, 0.94607, 0, 0, 0, 0, 0, 0, 0, 0, 0.94198, 0.94858, 0.9522, 0.95185, 0.95085, 0.66366, 0.66476, 0.66617, 0.66664, 0.66688], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets organiques": {
men: [0.52817, 0.52861, 0.73073, 0.73049, 0.73045, 0.73171, 0, 0, 0, 0.95761, 0.95757, 0.95817, 0.95899, 0.96096, 0.96082, 0.95926, 0.95821, 0.9584, 0.95844, 0.9564, 0.74925, 0.6507, 0.65097, 0.38094, 0.3809, 0.38086, 0.38062, 0.38067, 0.19627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076622, 0.080121, 0.086034, 0.086067, 0.086056, 0.086039, 0.17296, 0.17349, 0.17327, 0.16402, 0.13781, 0.15387, 0.15376, 0.22687, 0.11912, 0.11908, 0.11915, 0.11913, 0.10313, 0.10315, 0.11098, 0.11098, 0.111, 0.11594, 0.24342, 0.24346, 0.24363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophes climatiques": {
men: [0, 0, 0, 0, 0.17611, 0.17642, 0.05863, 0.012131, 0.011469, 0.010047, 0.010046, 0.010053, 0.010061, 0.0087668, 0.0056178, 0.0055873, 0.0055812, 0.0055823, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27146, 0.27144, 0.27139, 0.17361, 0.1735, 0.16807, 0.16794, 0.16029, 0.16033, 0.16036, 0.12828, 0.14453, 0.15834, 0.15663, 0, 0, 0, 0, 0, 0, 0.038212, 0.028006, 0.02673, 0.026728, 0.034268, 0.016038, 0.016042, 0.01625, 0.016261, 0.017438, 0.019545, 0.019547, 0.019543, 0.018421, 0, 0, 0, 0.021041, 0.021062, 0.10466, 0.35511, 0.50703, 0.50637, 0.5063, 0.35074, 0.17337, 0.17331, 0.19473, 0.16442, 0.2404, 0.24045, 0.2219, 0.24655, 0.24655, 0.17325, 0.1771, 0.17735, 0.17737, 0.18696, 0.43319, 0.43371, 0.4341, 0.65512, 0.94192, 0.94121, 0.94079, 0.93269, 0.93242, 0.93278, 0.93257, 0.93231, 0.93212, 0.29018, 0.35867, 0.3583, 0.35796, 0.50042, 0.50148, 0.50184, 0.50202], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"évolution du climat": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14827, 0.18801, 0.18809, 0.10863, 0.10862, 0.10861, 0.10854, 0.14276, 0.12059, 0.28267, 0.28298, 0.28296, 0.2829, 0.10699, 0.05428, 0.046044, 0.046009, 0.041956, 0.038751, 0.03812, 0.035313, 0.034712, 0.034681, 0.005909, 0.0059034, 0.0059026, 0.0058733, 0, 0, 0, 0.01182, 0.07797, 0.098786, 0.16824, 0.19846, 0.27115, 0.27123, 0.27964, 0.27447, 0.27453, 0.27823, 0.3451, 0.37, 0.3631, 0.35597, 0.33224, 0.33885, 0.31056, 0.36906, 0.40592, 0.53628, 0.44715, 0.4397, 0.43964, 0.45135, 0.25615, 0.12795, 0.15588, 0.19006, 0.15712, 0.17693, 0.19486, 0.16851, 0.16244, 0.12054, 0.1863, 0.17644, 0.17027, 0.16124, 0.19144, 0.20183, 0.20201, 0.35142, 0.39322, 0.42174, 0.42374, 0.45837, 0.46772, 0.50385, 0.43994, 0.43982, 0.44858, 0.44003, 0.43807, 0.4742, 0.47375, 0.41668, 0.3973, 0.27753, 0.26354], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"oxydes d' azote": {
men: [0.16453, 0.13292, 0.27357, 0.2809, 0.28089, 0.2223, 0.15396, 0.15412, 0.15411, 0.15428, 0.15428, 0.15437, 0.15451, 0.12981, 0.10657, 0.19187, 0.11867, 0.11726, 0.11727, 0.13426, 0.19851, 0.44471, 0.44489, 0.44482, 0.44478, 0.44473, 0.44444, 0.59578, 0.74255, 0.6737, 0.67444, 0.69554, 0.6954, 0.7731, 0.96578, 0, 0, 0, 0, 0, 0, 0, 0.38818, 0.38817, 0.19716, 0.19713, 0.19714, 0.19713, 0.1496, 0.19347, 0.19345, 0.21154, 0.21148, 0.21146, 0.21126, 0.21092, 0.097859, 0.097819, 0.1528, 0.15283, 0.15284, 0.097927, 0.12757, 0.12769, 0.10894, 0, 0, 0, 0, 0, 0, 0.064812, 0.064726, 0.064717, 0.23183, 0.35195, 0.35183, 0.23154, 0.26486, 0.21379, 0.21384, 0.2139, 0.18223, 0.13306, 0.13309, 0.11742, 0.10336, 0.07979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.093926, 0.10759, 0.16706, 0.16706, 0.167, 0.16682, 0.10573, 0.10591, 0.1568, 0.15692, 0.15697], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"développement industriel": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53701, 0.51788, 0.52988, 0.52991, 0.51127, 0.51144, 0.51759, 0.5187, 0.51881, 0.51866, 0.51862, 0.51812, 0.57048, 0.67864, 0.26039, 0, 0, 0, 0.80248, 0.80231, 0.80307, 0.95186, 0.95222, 0.6708, 0.69786, 0.69856, 0.70073, 0.69984, 0.59035, 0.5101, 0.51003, 0.50965, 0.083891, 0.064127, 0.22299, 0.22313, 0.2231, 0.26628, 0.21664, 0.094783, 0.094784, 0.0948, 0.10121, 0.10859, 0.1086, 0.10868, 0.09094, 0.076177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10808, 0.12705, 0.14662, 0.16178, 0.16189, 0.16195], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"biogaz": {
men: [0.16571, 0.14631, 0.19293, 0.19287, 0.19286, 0.16005, 0.16496, 0.16975, 0.12736, 0.18945, 0.18945, 0.18956, 0.15748, 0.10404, 0.11613, 0.16934, 0.19235, 0.19238, 0.19239, 0.61106, 0.65976, 0.65955, 0.67484, 0.64437, 0.6443, 0.64424, 0.64382, 0.60986, 0.69429, 0.7555, 0.75632, 0.75627, 0.75612, 0.43419, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.094979, 0.16556, 0.1656, 0.14528, 0.14527, 0.18118, 0.21174, 0.21181, 0.32169, 0.14769, 0.11725, 0.11727, 0.1044, 0.099212, 0.045411, 0, 0.0062752, 0.0068397, 0.0068384, 0.005993, 0.0063974, 0.0039093, 0.0035282, 0.0038237, 0.0042711, 0.0041364, 0.0042934, 0.0040546, 0.0039964, 0.0039988, 0, 0, 0, 0, 0, 0.17755, 0.1782, 0.206, 0.20603, 0.21721, 0.21824, 0.25064, 0.25834, 0.23974, 0.28165, 0.28144, 0.26828, 0.25485, 0.25478, 0, 0.078878, 0.098299, 0.098278, 0.098275, 0.15663, 0.21646, 0.20675, 0.22329, 0.20127, 0.20141, 0.21046], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Kyoto": {
men: [0, 0, 0.048768, 0.048752, 0.048749, 0.027381, 0.027367, 0.027396, 0.032341, 0.032999, 0.032526, 0.032546, 0.032574, 0.032641, 0.032636, 0.28693, 0.33028, 0.33034, 0.33036, 0.6501, 0.70761, 0.76748, 0.76779, 0.81913, 0.82235, 0.82227, 0.82174, 0.82185, 0.7477, 0.61848, 0.61916, 0.61912, 0.61899, 0.63353, 0.53346, 0.23878, 0.20595, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15146, 0.1622, 0.18987, 0.22876, 0.23899, 0.23057, 0.22604, 0.22568, 0.41713, 0.38324, 0.51135, 0.51145, 0.5115, 0.40538, 0.042826, 0.03165, 0.088587, 0.08862, 0.088609, 0.083771, 0.071523, 0.071745, 0.071654, 0.066586, 0.066499, 0.051639, 0.0516, 0.046505, 0.04516, 0.099261, 0.055833, 0.050475, 0.050486, 0.054519, 0.035148, 0.032722, 0.032727, 0.032757, 0.032802, 0.037335, 0.047016, 0.053247, 0.061418, 0.014364, 0.013668, 0.014562, 0.012523, 0.011625, 0.025022, 0.026657, 0.013627, 0.013956, 0.013627, 0.081335, 0.069288, 0.095244, 0.091271, 0.091184, 0.12615, 0.075339, 0.078193, 0.080439], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phytoplancton": {
men: [0.32887, 0.29888, 0.34758, 0.23602, 0.22558, 0.22597, 0.22261, 0.18588, 0.18586, 0.19548, 0.19547, 0.19559, 0.20278, 0.15887, 0.16255, 0.12962, 0.06426, 0.011407, 0, 0, 0, 0, 0, 0.21964, 0.21962, 0.2196, 0.15277, 0.1528, 0.15279, 0.1533, 0.20687, 0.20686, 0.20682, 0.28023, 0.33163, 0.33196, 0.33171, 0.11372, 0.11375, 0.079554, 0.11767, 0.11739, 0.098997, 0.088193, 0.08811, 0.088097, 0.066372, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93589, 0.93683, 0.35955, 0.3591, 0.35881, 0.35834, 0.35829, 0.35802, 0.35782, 0.3577, 0.35757, 0.35778, 0.35774, 0.35782, 0, 0, 0, 0.34205, 0.48867, 0.42368, 0.42374, 0.42404, 0.42424, 0.42475, 0.42513, 0.42333, 0.42214, 0.42183, 0.42164, 0.42165, 0.60801, 0.57025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phénomènes climatiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0077323, 0.0074004, 0.0072496, 0.008547, 0.016535, 0.016533, 0.016531, 0.020551, 0.020538, 0.026895, 0.026026, 0.031876, 0.047934, 0.06256, 0.032122, 0.074464, 0.10362, 0.098312, 0.10623, 0.10612, 0.10615, 0.10617, 0.10623, 0.11405, 0.11311, 0.11311, 0.113, 0.12743, 0.12085, 0.10969, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12991, 0.12987, 0.12992, 0.1299, 0.12987, 0.13, 0.13041, 0.16451, 0.16438, 0.20906, 0.20903, 0.28601, 0.28585, 0.28575, 0.32018, 0.32036, 0.32032, 0.3204, 0.32048, 0.34132, 0.34132, 0.44006, 0.44046, 0.44107, 0.33315, 0.25338, 0.33159, 0.33199, 0.33228, 0.57338, 0.57177, 0.57134, 0.57108, 0.7123, 0.71209, 0.71237, 0.71221, 0.712, 0.9499, 0.94986, 0.94796, 0.94696, 0.94607, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fret ferroviaire": {
men: [0, 0, 0, 0, 0, 0.035127, 0.065348, 0.23178, 0.12213, 0.090599, 0.090595, 0.090651, 0.036444, 0.039804, 0.083955, 0.085875, 0.077567, 0.077583, 0.077587, 0.052307, 0.048746, 0.048731, 0.053993, 0.058647, 0.058642, 0.058636, 0.11639, 0.11641, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4844, 0.48453, 0.48461, 0.4849, 0.48375, 0.58953, 0.58952, 0.58897, 0.58889, 0.58891, 0.58887, 0.47972, 0.47898, 0.47894, 0.77748, 0.77726, 0.77719, 0.77644, 0.77521, 0.77543, 0.5867, 0.58711, 0.58723, 0.58729, 0.58735, 0.68605, 0.61335, 0.61313, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.03745, 0.034456, 0.06579, 0.065898, 0.076936, 0.076991, 0.077019], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"approvisionnement énergétique": {
men: [0.093757, 0.093835, 0.093835, 0.093805, 0.0938, 0.093962, 0.044847, 0.038336, 0.034025, 0.034064, 0.034247, 0.035538, 0.035569, 0.038659, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95582, 0.95523, 0.50325, 0.50288, 0.21347, 0.17061, 0.17063, 0.31276, 0.31202, 0.31174, 0.31173, 0.31144, 0.31139, 0.31141, 0.21932, 0.21939, 0.17494, 0.17493, 0.2457, 0.29842, 0.29839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15822, 0.16963, 0.16957, 0.18702, 0.27294, 0.27301, 0.27308, 0.31829, 0.31829, 0.31834, 0.31863, 0.31907, 0.38263, 0.3829, 0.17873, 0.40927, 0.29832, 0.29706, 0.38197, 0.38168, 0.38151, 0.29921, 0.29912, 0.29924, 0.29917, 0.29909, 0.29903, 0.29901, 0.50587, 0.33785, 0.56042, 0.43679, 0.30317, 0.24758, 0.24324], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 