var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"amflora": {
men: [0.98544, 0.99111, 0.99152, 0.99106, 0.99115, 0.99224, 0.99085, 0.99135, 0.992, 0.9918, 0.99173, 0.98116, 0.98167, 0.98205, 0.9783, 0.96433, 0.95387, 0.95477, 0.95082, 0.91279, 0.91084, 0.88021, 0.87946, 0.78184, 0.78976, 0.97685, 0.97128, 0.95873, 0.95658, 0.96253, 0.9624, 0.96252, 0.95768, 0.95782, 0.97588, 0.98039, 0.98149, 0.98023, 0.97997, 0.9802, 0.98175, 0.66163, 0.43257, 0.45626, 0.4563, 0.45605, 0.4561, 0.45569, 0.4084, 0.36525, 0.37936, 0.4032, 0.40324, 0.40315, 0.3696, 0.37181, 0.73255, 0.70974, 0.76631, 0.78123, 0.78123, 0.99037, 0.99137, 0.99232, 0.99217, 0.99236, 0.99256, 0.99293, 0.9939, 0.99349, 0.99308, 0.99282, 0.99187, 0.99147, 0.99182, 0.98476, 0.98497, 0.9808, 0.98658, 0.98544, 0.98544, 0.98674, 0.98744, 0.9882, 0.98914, 0.98885, 0.99078, 0.99078, 0.99018, 0.98997, 0.99012, 0.98823, 0.98168, 0.98389, 0.98389, 0.97959, 0.97644, 0.33204, 0.48182, 0.51231, 0.51037, 0.5103, 0.5533, 0.55307, 0.5529, 0.55348, 0.55355, 0.55355, 0.55343, 0.55364], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"basf": {
men: [0.57796, 0.54994, 0.61389, 0.57985, 0.59275, 0.62052, 0.61958, 0.6624, 0.68318, 0.72915, 0.7291, 0.74482, 0.76631, 0.77707, 0.7049, 0.81448, 0.75646, 0.92321, 0.82366, 0.82865, 0.83202, 0.4976, 0.49718, 0, 0.019298, 0.013173, 0.010592, 0.0082612, 0.0069833, 0.006982, 0.0069811, 0.006982, 0.007292, 0.0072931, 0.18468, 0.3139, 0.2679, 0.29506, 0.276, 0.33452, 0.55313, 0.45709, 0.47724, 0.43867, 0.41663, 0.4164, 0.41645, 0.41917, 0.37201, 0.34273, 0.3528, 0.35207, 0.35796, 0.3525, 0.29669, 0.31258, 0.29402, 0.3663, 0.48547, 0.50326, 0.50326, 0.65576, 0.72855, 0.7377, 0.82723, 0.87305, 0.85339, 0.85371, 0.77959, 0.75696, 0.75665, 0.70842, 0.68149, 0.66661, 0.67934, 0.4855, 0.53517, 0.5027, 0.49628, 0.44194, 0.45607, 0.47834, 0.53935, 0.46767, 0.41521, 0.40633, 0.40143, 0.38957, 0.36916, 0.18691, 0.18378, 0.18297, 0.093789, 0.10019, 0.10019, 0.077115, 0.050538, 0.023133, 0.024571, 0.049815, 0.0248, 0.025482, 0.025472, 0.065054, 0.052088, 0.055796, 0.063488, 0.063488, 0.063474, 0.063498], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"tomates": {
men: [0.54616, 0.58592, 0.57644, 0.53736, 0.55688, 0.53366, 0.51201, 0.4399, 0.45627, 0.41813, 0.41463, 0.42959, 0.41869, 0.3715, 0.22777, 0.17992, 0.17713, 0.15668, 0.15309, 0.18287, 0.17731, 0.28511, 0.3628, 0.4126, 0.38529, 0.38047, 0.37568, 0.51806, 0.44519, 0.42709, 0.42355, 0.41767, 0.4184, 0.41196, 0.40497, 0.34117, 0.28851, 0.28362, 0.30072, 0.29012, 0.26148, 0.15341, 0.15047, 0.15042, 0.14588, 0.14329, 0.1389, 0.14444, 0.12882, 0.14485, 0.16392, 0.15804, 0.1403, 0.16162, 0.22957, 0.18255, 0.18074, 0.15544, 0.15656, 0.15801, 0.15706, 0.15179, 0.15194, 0.14362, 0.10915, 0.14397, 0.1354, 0.15652, 0.18162, 0.19168, 0.14453, 0.17471, 0.23351, 0.23915, 0.24508, 0.16839, 0.18135, 0.15205, 0.18983, 0.15788, 0.1612, 0.13323, 0.088993, 0.077472, 0.085985, 0.086521, 0.049737, 0.049737, 0.046104, 0.041943, 0.032652, 0.039823, 0.020871, 0.019698, 0.019698, 0.068847, 0.069348, 0.077145, 0.073598, 0.077502, 0.15791, 0.16281, 0.19829, 0.24823, 0.36884, 0.2981, 0.28341, 0.29372, 0.28296, 0.208], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amidon": {
men: [0.69632, 0.74868, 0.77122, 0.77087, 0.77072, 0.77936, 0.77818, 0.77823, 0.77874, 0.77818, 0.77813, 0.7783, 0.96463, 0.97669, 0.87102, 0.67727, 0.40311, 0.40349, 0.36715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.74153, 0.71306, 0.73548, 0.73453, 0.56636, 0.56649, 0.63655, 0.7197, 0.73632, 0.73612, 0.79577, 0.79533, 0.79542, 0.79538, 0.71478, 0.73094, 0.73079, 0.73098, 0.8795, 0.87931, 0.91891, 0.54135, 0, 0, 0.73297, 0.77092, 0.77092, 0.76975, 0.77053, 0.66082, 0.66077, 0.32, 0.32007, 0.32018, 0.32037, 0.33625, 0.33612, 0.35155, 0.080876, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.143, 0.24912, 0.24912, 0.22534, 0.22215, 0.57462, 0.57295, 0.57295, 0.57224, 0.57217, 0.57193, 0.71297, 0.77918, 0.61816, 0.43476, 0.43476, 0.43466, 0.54683], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités suédoises": {
men: [0.95196, 0.94936, 0.94817, 0.94773, 0.94755, 0.94697, 0.94554, 0.9456, 0.94622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96789, 0.97547, 0.9748, 0.97454, 0.97462, 0.97409, 0.9742, 0.97415, 0.97406, 0.97444, 0.97424, 0.97449, 0.97459, 0.97437, 0.9702, 0, 0, 0, 0.96603, 0.97183, 0.97183, 0.97436, 0.97535, 0.97524, 0.97517, 0.97625, 0.97645, 0.97681, 0.97739, 0.97769, 0.97729, 0.97787, 0.9738, 0.96855, 0.96829, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorisation de culture": {
men: [0, 0.11245, 0.15977, 0.15969, 0.15966, 0.13174, 0.11087, 0.116, 0.11234, 0.11226, 0.11225, 0.11228, 0.14657, 0.14657, 0.19639, 0.16575, 0.13781, 0.12824, 0.14721, 0.16706, 0.26833, 0.37521, 0.47415, 0.47563, 0.49593, 0.49559, 0.26145, 0.12226, 0.12199, 0.20855, 0.18785, 0.23926, 0.17068, 0.1707, 0.44497, 0.44475, 0.44525, 0.34382, 0.3322, 0.38394, 0.48929, 0.63415, 0.65928, 0.68935, 0.60306, 0.60274, 0.6028, 0.60277, 0.56756, 0.56778, 0.59389, 0.66827, 0.66834, 0.65247, 0.62761, 0.5127, 0.37405, 0.24239, 0.24968, 0.24993, 0.24993, 0.45411, 0.4383, 0.43825, 0.4308, 0.43127, 0.43136, 0.43152, 0.38233, 0.25799, 0.26321, 0.27228, 0.29405, 0.29414, 0.29407, 0.02773, 0.027736, 0.027762, 0.10393, 0.10381, 0.10381, 0.12873, 0.16424, 0.2297, 0.25727, 0.25985, 0.2909, 0.2909, 0.29101, 0.49626, 0.49633, 0.49539, 0.30848, 0.30917, 0.30917, 0.23075, 0.12169, 0.96848, 0.96565, 0.96565, 0, 0, 0.96831, 0.35196, 0.35186, 0.17701, 0.17703, 0.17703, 0.17699, 0.17706], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fruits et légumes bio": {
men: [0.95924, 0.95663, 0.95543, 0.95498, 0.9548, 0.95422, 0.95277, 0, 0.95161, 0.95093, 0.95086, 0.95107, 0.95121, 0.95123, 0.95308, 0.95539, 0.9575, 0.9584, 0.9585, 0.95941, 0.59112, 0.59176, 0, 0, 0, 0, 0.59221, 0.50679, 0.47524, 0.48241, 0.44626, 0.44033, 0.44046, 0.44052, 0.45165, 0.43695, 0.43745, 0.43688, 0.43685, 0.43695, 0.42129, 0.28237, 0.21168, 0.15848, 0.21283, 0.25707, 0.25709, 0.25708, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95789, 0.9575, 0.9571, 0.13396, 0.1341, 0.13411, 0.13411, 0.13408, 0.13413], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mise en culture": {
men: [0.1285, 0.21487, 0.24855, 0.24844, 0.24839, 0.24779, 0.17515, 0.18673, 0.16261, 0.17511, 0.1751, 0.17514, 0.16732, 0.15954, 0.12942, 0.1117, 0.092359, 0.092446, 0.092456, 0.07605, 0.086197, 0.05015, 0.088198, 0, 0.020907, 0.020893, 0.025031, 0.030645, 0.038728, 0.050569, 0.050563, 0.039158, 0.039169, 0.033135, 0.033123, 0.033106, 0.033143, 0.012532, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15144, 0.17315, 0.12289, 0.20569, 0.20933, 0.20954, 0.20954, 0.20923, 0.20944, 0.2004, 0.18635, 0.20144, 0.19105, 0.18524, 0.21992, 0.22644, 0.39485, 0.12682, 0.12695, 0.12699, 0.12695, 0.22262, 0.22266, 0.21675, 0.51695, 0.51636, 0.57696, 0.62177, 0.62839, 0.66512, 0.66575, 0.84495, 0.84585, 0.84585, 0.84617, 0.82699, 0.82712, 0.98361, 0.97525, 0.97745, 0.97745, 0.97594, 0.96992, 0, 0, 0.96522, 0.96404, 0.9639, 0.96351, 0.96311, 0.59374, 0.35476, 0.3548, 0.3548, 0.35473, 0.17542], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"betteraves": {
men: [0.004925, 0.0049116, 0.0077123, 0.0077087, 0.0076092, 0.0078031, 0.11319, 0.10514, 0.25931, 0.25912, 0.50832, 0.58628, 0.61791, 0.92638, 0.69336, 0.69503, 0.69657, 0.11691, 0.10195, 0.078365, 0.054617, 0.054677, 0.019394, 0.019223, 0, 0, 0, 0.0077822, 0.0079291, 0.0078182, 0.0076716, 0.018472, 0.024871, 0.11793, 0.11788, 0.38736, 0.402, 0.45629, 0.45626, 0.38686, 0.5601, 0.51909, 0.54624, 0.507, 0.39143, 0.37597, 0.37601, 0.30476, 0.24638, 0.2431, 0.24305, 0.24311, 0.23301, 0.24253, 0.13104, 0.084152, 0.11465, 0.1178, 0.22347, 0.22918, 0.22918, 0.26833, 0.37623, 0.24731, 0.24729, 0.29147, 0.3033, 0.30007, 0.29136, 0.29145, 0.27359, 0.32599, 0.33768, 0.33779, 0.3377, 0.33853, 0.24285, 0.31831, 0.26039, 0.19296, 0.19619, 0.17221, 0.22884, 0.22878, 0.24745, 0.2344, 0.05478, 0.047427, 0.047445, 0.03564, 0.042351, 0.04227, 0.052144, 0.042936, 0.042936, 0.112, 0.11214, 0.24738, 0.24666, 0.24568, 0.25442, 0.29539, 0.29527, 0.49112, 0.18652, 0.16458, 0.1646, 0.17555, 0.19961, 0.20305], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"médecin vétérinaire": {
men: [0.067954, 0.23282, 0.41668, 0.41649, 0.41641, 0.81969, 0.81845, 0.8185, 0.81904, 0.81845, 0.81839, 0.81857, 0.81869, 0.95194, 0.94545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.40348, 0.40502, 0.95954, 0.95775, 0.95871, 0.95871, 0.95726, 0.95823, 0.95813, 0.95806, 0.95911, 0.95931, 0.95967, 0.96024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hcb": {
men: [0.76343, 0.83321, 0.83831, 0.83792, 0.84999, 0.86531, 0.84144, 0.82462, 0.82516, 0.80468, 0.80463, 0.8048, 0.77412, 0.75012, 0.72045, 0.5559, 0.52856, 0.52906, 0.44935, 0.25056, 0.22189, 0.17258, 0.17244, 0.20088, 0.20087, 0.20074, 0.095113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0061851, 0.0062442, 0.0062425, 0.0061668, 0.0061827, 0.0051401, 0.0048384, 0.0044601, 0.0055714, 0.0056235, 0.005695, 0.0056956, 0.0056943, 0.0053427, 0, 0, 0, 0, 0, 0, 0.021649, 0.075849, 0.071159, 0.066848, 0.066921, 0.066935, 0.06696, 0.22033, 0.2204, 0.22031, 0.22044, 0.10291, 0.10294, 0.10291, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.060472, 0.080343, 0.080524, 0.080524, 0.0804, 0.080501, 0.10535, 0.11307, 0.11307, 0.11513, 0.11512, 0.11507, 0.13183, 0.16045, 0.22168, 0.22171, 0.22171, 0.22166, 0.22175], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière féculière": {
men: [0.97352, 0.97166, 0.97211, 0.97166, 0.97147, 0.97265, 0.97118, 0.97124, 0.97188, 0.97118, 0.97111, 0.97132, 0.97146, 0.97149, 0.96329, 0.964, 0.96051, 0.96142, 0.96151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques de dissémination": {
men: [0.60019, 0.63273, 0.96481, 0.96436, 0.96418, 0.96359, 0.96213, 0.9622, 0.96283, 0.96213, 0.96206, 0.96228, 0.96242, 0.96244, 0.94545, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.051214, 0.051188, 0.058162, 0.058494, 0.28462, 0.28469, 0.25141, 0.25099, 0.30393, 0.30385, 0.46224, 0.54267, 0.54273, 0.5427, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alimentation animale": {
men: [0.17481, 0.39771, 0.46106, 0.46085, 0.46076, 0.50691, 0.51617, 0.53862, 0.37719, 0.38247, 0.38244, 0.38253, 0.372, 0.37402, 0.36253, 0.22576, 0.18819, 0.18837, 0.18839, 0.15584, 0.13843, 0.13138, 0.23751, 0.14575, 0.14574, 0.14564, 0.15362, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021535, 0.021853, 0.019066, 0.019061, 0.019063, 0.019052, 0.018367, 0.017753, 0.020726, 0.034649, 0.036853, 0.04035, 0.03294, 0.032933, 0.040636, 0.070544, 0.092733, 0.17203, 0.17171, 0.20874, 0.22002, 0.25601, 0.27135, 0.29454, 0.22595, 0.21046, 0.24675, 0.24685, 0.30656, 0.30863, 0.26518, 0.14865, 0.14879, 0.070429, 0.070411, 0.070585, 0.0706, 0.070666, 0.12818, 0.12803, 0.12803, 0.12805, 0, 0.14129, 0.21476, 0.18737, 0.18757, 0.18757, 0.18764, 0.090505, 0.068205, 0.063595, 0.046138, 0.034674, 0.032781, 0.032731, 0.032772, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Union des industries chimiques": {
men: [0.89719, 0.89408, 0.89295, 0.89254, 0.89237, 0.86362, 0.85479, 0.85484, 0.94127, 0.93862, 0.93855, 0.93876, 0.93403, 0.93114, 0.67866, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transgéniques": {
men: [0.15666, 0.37222, 0.39675, 0.42276, 0.41262, 0.45348, 0.42574, 0.41195, 0.43002, 0.52079, 0.52075, 0.52087, 0.48642, 0.48643, 0.46213, 0.37333, 0.36507, 0.35313, 0.19444, 0.16578, 0.13271, 0.12897, 0.12859, 0.018563, 0.020149, 0.020034, 0.020279, 0.017051, 0.0097465, 0.015227, 0.018017, 0.018503, 0.020896, 0.021695, 0.027045, 0.020366, 0.020583, 0.020378, 0.017743, 0.017884, 0.029492, 0.088062, 0.098887, 0.088586, 0.086569, 0.081779, 0.082792, 0.081101, 0.088407, 0.081509, 0.086666, 0.13714, 0.14017, 0.13298, 0.14694, 0.084266, 0.084931, 0.086063, 0.086366, 0.089788, 0.089788, 0.1108, 0.09427, 0.09604, 0.083507, 0.051712, 0.050965, 0.05136, 0.045168, 0.027024, 0.027567, 0.027041, 0.024521, 0.024269, 0.038975, 0.038554, 0.032635, 0.031349, 0.033374, 0.034291, 0.034702, 0.035306, 0.036008, 0.03601, 0.037479, 0.036349, 0.039161, 0.039805, 0.028297, 0, 0, 0, 0, 0, 0, 0, 0, 0.083805, 0.082493, 0.099435, 0.074953, 0.073653, 0.1027, 0.10456, 0.10949, 0.10348, 0.10825, 0.11923, 0.1192, 0.11925], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie papetière": {
men: [0.97105, 0.9694, 0.96901, 0.96856, 0.96837, 0.70661, 0.70554, 0.70558, 0.70605, 0.70554, 0.70549, 0.70564, 0.70575, 0.70576, 0.41, 0.33477, 0.24635, 0.24658, 0.24661, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écosystèmes naturels": {
men: [0, 0, 0.95112, 0.95068, 0.48581, 0.48551, 0.2087, 0.20871, 0.20885, 0.2087, 0.20868, 0.20873, 0.10861, 0.092055, 0.092234, 0.092457, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.55631, 0.55653, 0.55641, 0.55656, 0.55661, 0.59901, 0.77252, 0.77515, 0.77812, 0.77835, 0.7769, 0.73284, 0.6929, 0.69185, 0.53431, 0.53425, 0.49295, 0.49349, 0.49359, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"erreur humaine": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22298, 0.96737, 0.9667, 0.57062, 0.57067, 0.57036, 0.57043, 0.37732, 0.37728, 0.37743, 0.37735, 0.37745, 0.37749, 0.3774, 0.3121, 0.11907, 0.11215, 0, 0.2498, 0.35457, 0.35457, 0.69058, 0.69128, 0.69121, 0.69116, 0.69192, 0.69206, 0.69232, 0.81357, 0.47935, 0.27773, 0.22933, 0.10425, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture productiviste": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60793, 0.60785, 0.60793, 0.74323, 0.74333, 0.74307, 0.74269, 0.95596, 0.95472, 0.95465, 0.95486, 0.95375, 0.95214, 0.95149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.028244, 0.055424, 0.055636, 0.055653, 0.055549, 0.18257, 0.26404, 0.24748, 0.24773, 0.2477, 0.24769, 0.47669, 0.47679, 0.47697, 0.64811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"saumon": {
men: [0, 0, 0, 0.29473, 0.28635, 0.26834, 0.29466, 0.29468, 0.26414, 0.26395, 0.26393, 0.29048, 0.29052, 0.3012, 0.30628, 0.2956, 0.32883, 0.24637, 0.25392, 0.27383, 0.18312, 0.18332, 0.24032, 0.24107, 0.24106, 0.22747, 0.22729, 0.20571, 0.11725, 0.10843, 0.10841, 0, 0, 0, 0, 0, 0, 0.34013, 0.34011, 0.33425, 0.29945, 0.26237, 0.26004, 0.27877, 0.23879, 0.23866, 0.26642, 0.19657, 0.19302, 0.19868, 0.19864, 0.018361, 0.017249, 0.016883, 0.039109, 0.049284, 0.040365, 0.035492, 0.036491, 0.035062, 0.035312, 0.040801, 0.040777, 0.032874, 0.032871, 0.02588, 0.026522, 0.027028, 0.014055, 0, 0, 0, 0.03268, 0.036008, 0.035998, 0.074065, 0.061611, 0.11797, 0.14154, 0.19047, 0.19047, 0.1905, 0.18665, 0.18661, 0.19989, 0.19832, 0.15399, 0.16172, 0.15762, 0.10259, 0.18736, 0.29942, 0.23578, 0, 0, 0, 0, 0, 0, 0, 0.087732, 0.08772, 0.0683, 0.068271, 0.068251, 0.068323, 0.070989, 0.090077, 0.090057, 0.095077], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agrochimie": {
men: [0, 0.21966, 0.2964, 0.44516, 0.44508, 0.44481, 0.24618, 0.10704, 0.11652, 0.12291, 0.1229, 0.12293, 0.12295, 0.12295, 0.11977, 0.043177, 0, 0, 0.012872, 0.012884, 0.014161, 0.019585, 0.019439, 0.019409, 0.018793, 0.018781, 0.017567, 0.017147, 0.017364, 0.017361, 0.017017, 0.10284, 0, 0, 0.051324, 0.051297, 0.051571, 0.046985, 0.047892, 0.047903, 0.2026, 0.30651, 0.3063, 0.2906, 0.29329, 0.29313, 0.29317, 0.29929, 0.62159, 0.62183, 0.6217, 0.73511, 0.73518, 0.73502, 0.549, 0.20975, 0.21055, 0.38492, 0.3842, 0.38459, 0.38459, 0.38803, 0.38842, 0.27352, 0.21545, 0.21568, 0.19788, 0.18479, 0.10841, 0.059979, 0.025078, 0.025093, 0.025117, 0.025125, 0.025119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"légumes": {
men: [0.25107, 0.25615, 0.26218, 0.26206, 0.26142, 0.2506, 0.26719, 0.26638, 0.33083, 0.2977, 0.29292, 0.2938, 0.28613, 0.31928, 0.1918, 0.17057, 0.17651, 0.16867, 0.18665, 0.19143, 0.18545, 0.16894, 0.19175, 0.18967, 0.19222, 0.16446, 0.15104, 0.22164, 0.20068, 0.19489, 0.191, 0.19132, 0.17931, 0.16994, 0.14902, 0.14665, 0.12272, 0.11861, 0.11672, 0.122, 0.12345, 0.068993, 0.057406, 0.060752, 0.058, 0.10192, 0.10586, 0.11285, 0.133, 0.14384, 0.15525, 0.17535, 0.18186, 0.20098, 0.20576, 0.1645, 0.1642, 0.15112, 0.15975, 0.097992, 0.097021, 0.10157, 0.091254, 0.073156, 0.069071, 0.0755, 0.075499, 0.043265, 0.056713, 0.066375, 0.055642, 0.056244, 0.065117, 0.070198, 0.068528, 0.072544, 0.061754, 0.061981, 0.085935, 0.077725, 0.077164, 0.088937, 0.063957, 0.059494, 0.059309, 0.059927, 0.046773, 0.039174, 0.034402, 0.021582, 0.020818, 0.022946, 0.0091848, 0, 0, 0.028736, 0.031376, 0.029037, 0.027892, 0.027963, 0.045303, 0.051053, 0.056491, 0.056408, 0.068325, 0.071557, 0.082397, 0.074381, 0.077804, 0.050484], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hygiène alimentaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95227, 0.95236, 0.95215, 0.95272, 0.96244, 0.96612, 0.96641, 0.96461, 0.96557, 0.96557, 0.96411, 0.53718, 0.53713, 0.53709, 0.36538, 0.36545, 0.36559, 0.3658, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lutte biologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9637, 0.9637, 0.96407, 0.96476, 0.96492, 0.96307, 0.96457, 0.96675, 0.96675, 0.96525, 0.96647, 0.96548, 0.96266, 0.96266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"masques de protection": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9637, 0.9637, 0.96407, 0.96476, 0.96492, 0.96307, 0.96457, 0.96675, 0.96675, 0.96525, 0.96647, 0.96548, 0.96266, 0.96266, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arrachage": {
men: [0.53495, 0.51239, 0.51175, 0.51151, 0.51141, 0.5111, 0.62951, 0.62955, 0.62997, 0.62951, 0.62947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011427, 0.011426, 0.011418, 0.01153, 0.011128, 0.01028, 0.0097926, 0.010036, 0.0099484, 0.012069, 0.016744, 0.018988, 0.018979, 0.01819, 0, 0, 0, 0.034614, 0.032481, 0.042793, 0.047691, 0.054458, 0.055776, 0.055782, 0.06509, 0.074399, 0.074428, 0.12206, 0.14101, 0.14102, 0.14099, 0.26764, 0.42827, 0.42991, 0.43004, 0.42923, 0.24038, 0.19013, 0.18984, 0.19003, 0.17958, 0.12871, 0.12885, 0.12888, 0.12893, 0.05677, 0, 0, 0, 0.097636, 0.13687, 0.18025, 0.12434, 0.12437, 0.13252, 0.24735, 0.24707, 0.17561, 0.17564, 0.17573, 0.17569, 0.19286, 0.19281, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"crustacés": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.025137, 0.11155, 0.11907, 0.13021, 0.11663, 0.11485, 0.10686, 0.10163, 0.09836, 0.08264, 0.064369, 0.06436, 0.070073, 0.070092, 0, 0, 0, 0, 0, 0.077898, 0.081879, 0.085352, 0.097132, 0.11665, 0.18944, 0.18946, 0.18936, 0.18938, 0.14151, 0.10666, 0.1067, 0.14152, 0.14156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96107, 0.96213, 0.96233, 0.33196, 0.10197, 0.07751, 0.046094, 0.046121, 0.046166, 0.046181, 0.046168, 0.046283, 0.045731, 0.044815, 0, 0.040594, 0.040594, 0.044533, 0.057164, 0.060458, 0.10156, 0.10154, 0.062715, 0.062715, 0.062738, 0.062784, 0.063971, 0.064351, 0.058956, 0, 0, 0, 0, 0, 0, 0, 0.38239, 0.38234, 0.38218, 0.38202, 0.55108, 0.60808, 0.75945, 0.64354, 0.64339, 0.64365], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pieds de vigne transgénique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0056664, 0.0046836, 0.004544, 0.0044875, 0.004377, 0.0043907, 0.0043905, 0.0043875, 0.0041689, 0.0040206, 0.0039697, 0.0039146, 0.003814, 0.0038145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96962, 0.9706, 0.9705, 0.97043, 0.97149, 0.9717, 0.97205, 0.97263, 0.97293, 0.80641, 0.80688, 0.80768, 0.80793, 0.80771, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 