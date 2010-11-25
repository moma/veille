var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"production photovoltaïque": {
men: [0, 0.3786, 0.39049, 0.39063, 0.39066, 0.39106, 0.39159, 0.39009, 0.38991, 0.39006, 0.39003, 0.39006, 0.39015, 0.39019, 0.5344, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28584, 0.44222, 0.44231, 0.44247, 0.44263, 0.44239, 0.44247, 0.44275, 0.44243, 0.52294, 0.52294, 0.52292, 0.70526, 0.96204, 0.9607, 0.95786, 0.95723, 0.95731, 0.95662, 0.9567, 0.95648, 0.95637, 0.95669, 0.95475, 0.95496, 0.95495, 0.93977, 0.93979, 0.93918, 0.93982, 0.94023, 0.94001, 0.9407, 0.94163, 0.94169, 0.94185, 0.94119, 0.94147, 0.94138, 0.9414, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"subventions publiques": {
men: [0.25572, 0.20258, 0.17007, 0.18179, 0.16655, 0.16662, 0.16212, 0.068802, 0.069555, 0.069581, 0.071265, 0.080265, 0.080284, 0.080293, 0.10125, 0.30556, 0.45715, 0.43457, 0.43462, 0.38788, 0.49852, 0.67116, 0.67198, 0.69022, 0.69014, 0.69012, 0.69047, 0.50776, 0.533, 0.34894, 0.22293, 0.245, 0.24487, 0.20298, 0.20291, 0.37912, 0.37912, 0.35775, 0.31702, 0.31698, 0.34002, 0.34705, 0.39419, 0.39975, 0.56288, 0.45565, 0.45571, 0.36924, 0.30967, 0.27961, 0.2792, 0.27928, 0.29005, 0.28998, 0.2729, 0.28259, 0.21751, 0.14231, 0.14751, 0.14465, 0.18635, 0.1439, 0.1499, 0.053964, 0.054017, 0.054027, 0.12145, 0.12149, 0.12142, 0.13167, 0.13175, 0.12592, 0.12127, 0.14169, 0.08369, 0.11429, 0.12684, 0.1376, 0.1218, 0.17147, 0.055144, 0.055104, 0.055109, 0.1956, 0.18384, 0.2216, 0.23178, 0.27631, 0.28877, 0.38024, 0.4189, 0.38753, 0.42595, 0.36326, 0.53005, 0.53043, 0.45122, 0.17347, 0.16783, 0.16771, 0.56293, 0.5428, 0.54281, 0.52191, 0.47792, 0.48883, 0.48906, 0.53044, 0.53057, 0.53055], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sous-marins nucléaires": {
men: [0, 0, 0.10573, 0.10577, 0.10578, 0.10589, 0.052105, 0.051905, 0.051882, 0.26821, 0.4698, 0.5329, 0.50123, 0.50129, 0.44572, 0.44557, 0.42361, 0.42361, 0.42367, 0.42365, 0.69107, 0.69484, 0.69569, 0.63393, 0.37288, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3189, 0.31892, 0.31869, 0.31872, 0.31865, 0.31861, 0.31872, 0.43132, 0.94913, 0.94912, 0.94903, 0.94905, 0.94844, 0.94908, 0, 0, 0, 0, 0.94441, 0.95113, 0.95046, 0.95075, 0.95066, 0.95068, 0.95079, 0.95078, 0.95084, 0.95129, 0.95043, 0.95066, 0.95063], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0, 0, 0.15929, 0.15934, 0.15936, 0.27599, 0.27636, 0.29565, 0.29552, 0.32074, 0.32072, 0.32074, 0.32081, 0.32085, 0.32102, 0.35508, 0.37006, 0.37007, 0.37012, 0.9433, 0.94364, 0.94879, 0.94994, 0.94893, 0.94882, 0.9488, 0.36163, 0.24296, 0.24297, 0.17574, 0.17568, 0.17565, 0.17556, 0.1756, 0.34179, 0.34159, 0.34159, 0.34172, 0.3418, 0.43419, 0.45607, 0.8272, 0.82661, 0.82821, 0.82841, 0.82833, 0.82846, 0.82791, 0.70302, 0.70326, 0.70224, 0.70243, 0.70216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"besoins alimentaires": {
men: [0.9319, 0.93209, 0.9317, 0.93202, 0.93209, 0.93305, 0.95401, 0.4437, 0.4118, 0.41195, 0.41193, 0.41195, 0.37161, 0.37165, 0.37185, 0.37172, 0.3718, 0.37181, 0.40097, 0.40095, 0.073412, 0.32458, 0.48599, 0.48547, 0.48541, 0.4854, 0.31012, 0.30962, 0.30963, 0.30879, 0.30868, 0.30864, 0.1833, 0.18335, 0.18328, 0.18317, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18229, 0.213, 0.20309, 0.20308, 0.14347, 0.17479, 0.14834, 0.1482, 0.12861, 0.12862, 0.12852, 0.10317, 0.13692, 0.1369, 0, 0, 0, 0, 0.28111, 0.28111, 0.32986, 0.27019, 0.31525, 0.31518, 0.31541, 0.45781, 0.45785, 0.45792, 0.57994, 0.58012, 0.58006, 0.58008, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"troubles sociaux": {
men: [0.90091, 0.9011, 0.88155, 0.88185, 0.88192, 0.88283, 0.88402, 0.88063, 0.88023, 0.9482, 0.57605, 0.57608, 0.39827, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9394, 0.94406, 0.9442, 0.94426, 0.94403, 0.94403, 0.94401, 0.9433, 0.94344, 0.94435, 0.36092, 0.2481, 0.24819, 0.24805, 0.11782, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bassin parisien": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.036328, 0.10601, 0.10599, 0.13824, 0.18287, 0.18281, 0.1827, 0.1827, 0.18277, 0.18281, 0.18279, 0.9435, 0.94387, 0.9432, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95073, 0.95091, 0.9515, 0.95083, 0.94998, 0.94998, 0.94995, 0.55692, 0.55726, 0.55744, 0.67083, 0.72994, 0.59627, 0.59584, 0.45651, 0.45641, 0.45635, 0.4565, 0.4565, 0.4566, 0.4566, 0.32201, 0.32202, 0.32181, 0.18423, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"analyses biologiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95891, 0.96008, 0.95905, 0.95894, 0.95891, 0.9594, 0.95785, 0.95789, 0.9553, 0.95496, 0.95481, 0.95431, 0.95454, 0.95419, 0, 0.50196, 0.50216, 0.50228, 0.50221, 0.50173, 0.30391, 0.30369, 0.30428, 0.30436, 0.30433, 0.30437, 0.30417, 0.27305, 0.27315, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"industrie touristique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.46314, 0.46298, 0.94511, 0.94461, 0.94484, 0.94909, 0.94853, 0.94852, 0.9489, 0.94912, 0.9511, 0.95019, 0.95057, 0.9499, 0.94529, 0.94552, 0.94543, 0.94557, 0.94495, 0.26125, 0.26134, 0.26096, 0.26103, 0.26093, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"femmes seules": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25814, 0.93417, 0.93439, 0.93405, 0.9335, 0.93349, 0.93386, 0.93408, 0.93395, 0.93307, 0.93344, 0.93277, 0.93458, 0.9348, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18696, 0.13844, 0.12337, 0.12342, 0.12335, 0.12337, 0.12345, 0.12336, 0.12325, 0.12325, 0.23638, 0.2364, 0.19085, 0.19091, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits agrochimiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50451, 0.50378, 0.50392, 0.65826, 0.65812, 0.6581, 0.65813, 0.65798, 0.65807, 0.65812, 0.65796, 0.6916, 0.95196, 0.95124, 0.94604, 0.94696, 0.94715, 0.93512, 0.93546, 0.93495, 0.93513, 0.93571, 0.37577, 0.37543, 0.37543, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet solaire": {
men: [0.19677, 0.21822, 0.26763, 0.26772, 0.26774, 0.26802, 0.30153, 0.16485, 0.16478, 0.16484, 0.16483, 0.16484, 0, 0, 0, 0.95115, 0.95134, 0.95136, 0.95148, 0.95145, 0.95179, 0.95699, 0.95815, 0.95713, 0.95702, 0.95699, 0.95748, 0.95593, 0.40251, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.037569, 0.033237, 0.033302, 0.03331, 0.033307, 0.033312, 0.031394, 0.028838, 0.032722, 0.032675, 0.033531, 0.033517, 0.03351, 0.042826, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066039, 0.066039, 0.066037, 0.04918, 0.036361, 0.024701, 0.026709, 0.02975, 0.029753, 0.029731, 0.028673, 0.029867, 0.029863, 0.030221, 0, 0, 0, 0, 0, 0.094143, 0.094207, 0.082421, 0.082402, 0.082462, 0.096909, 0.096916, 0.086505, 0.09188, 0.086714, 0.086706, 0.095418, 0.10976, 0.13208, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"filière industrielle": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.41451, 0.94435, 0.94437, 0.94449, 0.94446, 0.94479, 0.94996, 0.95111, 0.9501, 0.38974, 0.38973, 0.38992, 0.1558, 0.10976, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.13693, 0.11107, 0.11672, 0.18578, 0.1979, 0.20382, 0.2038, 0.20383, 0.18783, 0.22383, 0.2239, 0.2079, 0.20796, 0.21905, 0.12886, 0.15979, 0.19951, 0.086038, 0, 0, 0.085095, 0.085095, 0.085093, 0.061797, 0.061806, 0.039829, 0.039836, 0.062304, 0.059763, 0.10774, 0.11955, 0.11381, 0.11567, 0.10784, 0.080337, 0.080335, 0.083993, 0.093222, 0.093252, 0.12626, 0.12618, 0.1081, 0.11685, 0.054063, 0, 0, 0, 0.047925, 0.062317, 0.060021, 0.026469, 0.026117, 0.022548, 0.021065, 0.021075, 0.02107, 0.020609, 0.019511, 0.022966, 0.02025, 0.020236, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.005651], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeux financiers": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94818, 0.94785, 0.94771, 0.94721, 0.94744, 0.94709, 0.3801, 0.12022, 0.085768, 0.085789, 0.085777, 0.085695, 0.085729, 0.070502, 0, 0, 0, 0, 0, 0, 0, 0.32046, 0.37805, 0.3779, 0.37782, 0.37781, 0.37783, 0.47019, 0.4889, 0.37611, 0.41184, 0.41185, 0.41184, 0.41153, 0.41159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11822, 0.19136, 0.20934, 0.20943, 0.20938, 0.20953, 0.20974, 0.22298, 0.30866, 0.33401, 0.38787, 0.47182, 0.46292, 0.46297, 0.32857, 0.16339, 0.31192, 0.11828, 0.11831, 0.11831], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"protection de la biodiversité": {
men: [0.070278, 0.065919, 0.066892, 0.058186, 0.058191, 0.063524, 0.05819, 0.051292, 0.051269, 0.054421, 0.054418, 0.054421, 0.064608, 0.03694, 0.1408, 0.15263, 0.15266, 0.19092, 0.19095, 0.21009, 0.33957, 0.61579, 0.61654, 0.61588, 0.61581, 0.6158, 0.95839, 0.95684, 0, 0, 0, 0, 0, 0.57468, 0.134, 0.13392, 0.13392, 0.12605, 0.12608, 0.12607, 0.12595, 0.10496, 0.06639, 0.066519, 0.066535, 0.066529, 0.093865, 0.029215, 0.046697, 0.046713, 0.026717, 0.027497, 0.027486, 0.025735, 0.017249, 0.016355, 0.020504, 0.020507, 0.020508, 0.020503, 0, 0, 0.024873, 0.18717, 0.26143, 0.2589, 0.259, 0.27575, 0.3957, 0.4543, 0.45458, 0.45426, 0.45311, 0.45311, 0.4531, 0.45314, 0.43605, 0.21348, 0.18603, 0.14471, 0.14472, 0.14462, 0.10716, 0.066876, 0.025268, 0.023735, 0.011033, 0.011036, 0.011036, 0.036935, 0.028408, 0.021005, 0.017634, 0.029004, 0.041013, 0.041043, 0.034925, 0.056601, 0.084554, 0.077104, 0.07322, 0.073212, 0.073215, 0.061695, 0.07092, 0.095308, 0.12942, 0.1246, 0.10231, 0.10446], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"h5n1": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.040703, 0.040705, 0.042183, 0.043506, 0.04286, 0.046067, 0.046076, 0.046077, 0.04624, 0.046238, 0.080965, 0.11474, 0.22781, 0.3853, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93735, 0.93793, 0.93823, 0.9374, 0.93679, 0.64956, 0.17745, 0.17747, 0.1078, 0.10779, 0.10783, 0.10782, 0.10785, 0.10785, 0, 0.055671, 0.055635, 0.10682, 0.10686, 0.11258, 0.21089, 0.21109, 0.93818, 0.93834, 0.93768, 0.93796, 0.93787, 0.93789, 0.938, 0.93161, 0.93167, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surpêche": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.081312, 0.070399, 0.27299, 0.21601, 0.21607, 0.22524, 0.22519, 0.25839, 0.25942, 0.27401, 0.27405, 0.23131, 0.29441, 0.29441, 0.24985, 0.33766, 0.068262, 0.13695, 0.097284, 0.097319, 0.097355, 0.052717, 0.036333, 0.030632, 0.03061, 0.031923, 0.031923, 0.031922, 0.031925, 0, 0, 0, 0, 0, 0.043554, 0.075199, 0.27681, 0.31806, 0.31816, 0.35723, 0.35731, 0.3573, 0.34075, 0.34076, 0.46236, 0.43573, 0.63302, 0.7092, 0.69697, 0.79197, 0.79732, 0.79745, 0.68642, 0.68663, 0.68656, 0.33807, 0.28789, 0.28789, 0.28791, 0.30159, 0.19656, 0.068553, 0.068551], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"coût environnemental": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.081239, 0.14494, 0.20882, 0.20871, 0.26468, 0.32771, 0.32752, 0.32751, 0.31065, 0.31072, 0.31068, 0.35276, 0.42551, 0.49847, 0.43206, 0.2603, 0.14979, 0.14981, 0.12413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32285, 0.32264, 0.47395, 0.47361, 0.56156, 0.56143, 0.56137, 0.56156, 0.79462, 0.79481, 0.72312, 0.72305, 0.72307, 0.85117, 0.79974, 0.67902, 0.51509, 0.51547, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"têtes nucléaires": {
men: [0, 0, 0.43423, 0.43439, 0.7222, 0.72294, 0.72392, 0.37914, 0.37897, 0.27351, 0.27349, 0.27351, 0.27357, 0.2736, 0.27375, 0.27366, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34467, 0.34485, 0.34429, 0.34431, 0.34337, 0.34325, 0.3432, 0.34302, 0.3431, 0.9329, 0.93235, 0.93234, 0.9327, 0.93293, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19393, 0.93793, 0.18106, 0.1809, 0.10743, 0.10743, 0.093961, 0.093969, 0.093948, 0.093937, 0.093968, 0.093967, 0.093989, 0.093988, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"solidarité écologique": {
men: [0.95714, 0.95734, 0.95693, 0.95726, 0.95734, 0.95832, 0.94453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35386, 0.35454, 0.35463, 0.35459, 0.35465, 0.35441, 0.60349, 0.6037, 0.95948, 0.95975, 0.95937, 0.95916, 0.95913, 0.95917, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"consommation responsable": {
men: [0, 0, 0, 0, 0, 0, 0.20804, 0.42619, 0.426, 0.42616, 0.42613, 0.42616, 0.57582, 0.95146, 0.95197, 0.95166, 0.95185, 0.95186, 0.95199, 0.95195, 0.30888, 0, 0, 0, 0, 0, 0, 0, 0, 0.10367, 0.15062, 0.21634, 0.21623, 0.21628, 0.41285, 0.4126, 0.4126, 0.41276, 0.41286, 0.4128, 0.61786, 0.33339, 0.33315, 0.27548, 0.13552, 0.072461, 0.072472, 0.072424, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"grippe aviaire": {
men: [0.38966, 0.38974, 0.38957, 0.38971, 0.42506, 0.40042, 0.40096, 0.28275, 0.2671, 0.15065, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35298, 0.35246, 0.31409, 0.31396, 0.31389, 0.31388, 0.3139, 0.31965, 0.23063, 0.23993, 0.23987, 0.23987, 0.30031, 0.3301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.030895, 0.076487, 0.14374, 0.14381, 0.15437, 0.42752, 0.42794, 0.42797, 0.42804, 0.42774, 0.42787, 0.42783, 0.93789, 0.938, 0.93161, 0.93167, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"quotient familial": {
men: [0.33699, 0.50494, 0.50472, 0.5049, 0.50494, 0.50546, 0.50614, 0.96037, 0.95994, 0.9603, 0.96024, 0.96029, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96283, 0.96281, 0.9633, 0.96174, 0.38471, 0.38367, 0.38354, 0.38348, 0.38328, 0.1956, 0.14516, 0.1284, 0.10125, 0.10129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture conventionnelle": {
men: [0.2261, 0.22614, 0.21342, 0.23847, 0.23849, 0.23873, 0.13562, 0.1351, 0.17177, 0, 0, 0, 0, 0.7139, 0.71428, 0.38948, 0.45107, 0.45107, 0.45113, 0.30612, 0.30622, 0.3079, 0.30827, 0.2653, 0.25898, 0.25898, 0.22355, 0, 0, 0.062907, 0.10179, 0.15016, 0.15008, 0.18706, 0.29498, 0.38328, 0.38328, 0.42229, 0.43004, 0.42998, 0.48892, 0.75518, 0.75465, 0.73353, 0.95878, 0.16285, 0.16288, 0.13038, 0.072233, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"politique de la ville": {
men: [0, 0, 0.068618, 0.065175, 0.053661, 0.059844, 0.086644, 0.15341, 0.16128, 0.18505, 0.17123, 0.17124, 0.17128, 0.15655, 0.15607, 0.16252, 0.13154, 0.14308, 0.17906, 0.1933, 0.22607, 0.17558, 0.17579, 0.17561, 0.2077, 0.15884, 0.15892, 0.16703, 0.17594, 0.17546, 0.16072, 0.1607, 0.12334, 0.1563, 0.034982, 0.0077558, 0.0077557, 0.0074035, 0.0070459, 0.0072925, 0.0070971, 0.043862, 0.042412, 0.042494, 0.041622, 0.041273, 0.041781, 0.035195, 0.083134, 0.10744, 0.11969, 0.13616, 0.14003, 0.14, 0.16961, 0.045298, 0.094562, 0.1877, 0.17825, 0.18363, 0.20377, 0.22333, 0.24217, 0.25616, 0.2506, 0.24486, 0.28434, 0.22917, 0.20504, 0.20911, 0.19277, 0.09942, 0.16764, 0.14546, 0.1294, 0.11726, 0.13976, 0.10531, 0.10248, 0.096172, 0.09618, 0.11562, 0.1013, 0.08825, 0.088118, 0.11702, 0.093876, 0.10193, 0.11082, 0.10837, 0.10478, 0.11325, 0.11609, 0.11998, 0.11995, 0.12004, 0.13514, 0.18555, 0.18871, 0.089231, 0.076935, 0.093184, 0.13874, 0.17443, 0.13718, 0.12462, 0.11584, 0.13216, 0.12021, 0.11491], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"précarité énergétique": {
men: [0.23352, 0.23357, 0.23347, 0.23355, 0.23357, 0.23381, 0.044191, 0, 0, 0.096034, 0.096028, 0.096034, 0.096056, 0.094768, 0.09482, 0.094788, 0.079893, 0.065475, 0.055472, 0.052012, 0.059406, 0.070172, 0.070257, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041218, 0.028844, 0.019612, 0.01763, 0.017636, 0.017641, 0.017638, 0.017346, 0.01826, 0.11168, 0.1119, 0.11193, 0.11192, 0.11193, 0.11924, 0.1481, 0.2229, 0.27058, 0.27066, 0.27055, 0.27049, 0.29491, 0.32126, 0.31639, 0.3584, 0.35842, 0.34121, 0.34121, 0.42755, 0.46612, 0.26837, 0.25779, 0.23605, 0.23614, 0.23622, 0.27709, 0.24936, 0.16511, 0.083547, 0.083472, 0.081127, 0.081124, 0.086672, 0.086725, 0.17023, 0.18214, 0.21722, 0.21724, 0.21708, 0.10157, 0.10155, 0.10154, 0.23561, 0.23561, 0.3603, 0.3603, 0.36026, 0.064018, 0.061492, 0.042104, 0.037702, 0.037693, 0.034609, 0.034643, 0.034646, 0.033617, 0.033593, 0.033603, 0.0336, 0.033601, 0.033605, 0.04568, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"agriculture productiviste": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.088549, 0.088546, 0.1164, 0.11704, 0.20977, 0.20954, 0.20952, 0.20951, 0.20962, 0.94175, 0.94179, 0.34154, 0.34142, 0.34137, 0.20707, 0.20712, 0.20704, 0.20692, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050997, 0.044933, 0.044903, 0.044903, 0.044919, 0.044854, 0.039482, 0.039466, 0.039458, 0.036449, 0.035397, 0.035389, 0.035394, 0.035396, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.76773, 0.76773, 0.76771, 0.36607, 0.36629, 0.36641, 0.36609, 0.36585, 0.36588, 0.36561, 0.44404, 0.44394, 0.30496, 0.30507, 0.11103, 0.11106, 0.11106, 0.21135, 0.21135, 0.21122, 0.21136, 0.21145, 0.2114, 0.21156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sécurité maritime": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.095053, 0.095076, 0.095063, 0.094973, 0.095011, 0.094943, 0.095127, 0.043195, 0.025874, 0.025878, 0.020325, 0.020325, 0.020332, 0.024261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94134, 0.94164, 0.3264, 0.32619, 0.32622, 0.32598, 0.32601, 0.32593, 0.32589, 0.26477, 0.26476, 0.26482, 0.26482, 0.2648, 0, 0, 0, 0, 0, 0, 0, 0.34978, 0.51413, 0.59404, 0.59422, 0.59416, 0.59418, 0.59425, 0.59424, 0.59427, 0.59456, 0.59402, 0.59416, 0.59414], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"inquiète pour l' avenir": {
men: [0.94451, 0.9447, 0.9443, 0.94463, 0.9447, 0.94568, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.53424, 0.53411, 0.71457, 0.41452, 0.41442, 0.41442, 0.19811, 0.19796, 0.19799, 0.19818, 0.19822, 0.21292, 0.21299, 0.21288, 0.092345, 0.092402, 0, 0, 0, 0, 0, 0, 0.21324, 0.21305, 0.21291, 0.21293, 0.12685, 0.12686, 0.23554, 0.23551, 0.23559, 0.23559, 0.23564, 0.23564, 0.23562, 0.23562, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 