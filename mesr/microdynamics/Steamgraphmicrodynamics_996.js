var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"échange de seringues": {
men: [0.22679, 0.22634, 0.24516, 0.24516, 0.24521, 0.29063, 0.31148, 0, 0, 0, 0, 0, 0, 0.96532, 0.98324, 0.83206, 0.84015, 0.85018, 0.85018, 0.85018, 0.86194, 0.87096, 0.8705, 0.8831, 0.8831, 0.88327, 0.88325, 0.87897, 0.78424, 0.98591, 0.98712, 0.98665, 0.98665, 0.98665, 0.98399, 0.9783, 0.97966, 0.96855, 0.96855, 0.96855, 0.96868, 0.96808, 0.96913, 0.97259, 0.97259, 0.97259, 0.97259, 0.97259, 0.9707, 0.97289, 0.97228, 0, 0, 0, 0, 0, 0, 0, 0.40233, 0.40233, 0.40233, 0.40233, 0.40257, 0.20416, 0.20376, 0.14118, 0.14113, 0.14118, 0.19811, 0.19832, 0.33125, 0.39364, 0.3035, 0.3035, 0.3035, 0.33882, 0.33859, 0.49716, 0.49952, 0.88488, 0.88721, 0.69875, 0.6599, 0.76354, 0.67962, 0.67962, 0.67885, 0.67885, 0.67792, 0.70076, 0.70178, 0.70215, 0.70131, 0.64551, 0.64551, 0.98341, 0.98341, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"produits de substitution": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.87254, 0.91052, 0.75754, 0.78619, 0.78619, 0.77591, 0.77575, 0.71348, 0.74613, 0.75776, 0.75776, 0.7579, 0.75789, 0.75822, 0.64658, 0.51658, 0.67397, 0.56668, 0.56668, 0.69239, 0.69295, 0.51728, 0.2431, 0, 0, 0, 0, 0.21955, 0.21979, 0.17851, 0.17851, 0.17851, 0.17851, 0.17851, 0.17816, 0.47816, 0.47786, 0.47572, 0.47543, 0.29356, 0.29375, 0.39903, 0.39903, 0.54446, 0.74658, 0.74658, 0.74658, 0.74658, 0.74704, 0.7472, 0.74571, 0.60905, 0.60882, 0.75486, 0.75475, 0.65548, 0.65483, 0.65483, 0, 0, 0, 0.1975, 0.19737, 0.19752, 0.19846, 0.42854, 0.42967, 0.4291, 0.42935, 0.65061, 0.65256, 0.65256, 0.78509, 0.78509, 0.98549, 0.98359, 0.98503, 0.98554, 0.98436, 0.98231, 0.6721, 0.67286, 0.67286, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Etienne apaire": {
men: [0.43121, 0.43035, 0.63993, 0.63993, 0.64005, 0.64066, 0.64208, 0.51432, 0.97101, 0.97127, 0.97298, 0.97233, 0.43194, 0.2036, 0.56956, 0.67298, 0.66108, 0.6698, 0.6698, 0.6698, 0.66966, 0.67538, 0.67502, 0.67475, 0.67475, 0.67488, 0.70554, 0.77697, 0.98643, 0.97304, 0.97538, 0.037374, 0.02612, 0.02612, 0.026141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97195, 0.97112, 0.97173, 0.97014, 0.97014, 0.97014, 0.97268, 0.97268, 0.97268, 0.97268, 0.97327, 0.97348, 0.97154, 0.36223, 0.24146, 0.24156, 0.31276, 0.31309, 0.31278, 0.31278, 0.12035, 0.12035, 0.12035, 0.12029, 0.12021, 0.1203, 0.12087, 0.97041, 0.97297, 0.97167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues illicites": {
men: [0.090424, 0.37447, 0.48527, 0.48527, 0.48536, 0.48583, 0.44543, 0.4458, 0.37399, 0.37409, 0.37475, 0.43705, 0.43684, 0.62055, 0.67063, 0.37273, 0.37274, 0.37258, 0.37258, 0.37258, 0.59042, 0.72042, 0.97181, 0.97142, 0.97142, 0.9716, 0.97159, 0.97201, 0.97434, 0.97934, 0.9817, 0.9832, 0.9832, 0.9832, 0.97865, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48532, 0.4866, 0.48595, 0.48624, 0.48401, 0.48546, 0.48546, 0.48491, 0.48491, 0.48425, 0.48454, 0.97051, 0.97101, 0.96985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"overdoses": {
men: [0.61532, 0.61409, 0.65038, 0.65038, 0.6505, 0.56184, 0.54714, 0.49881, 0.38316, 0.38327, 0.15344, 0.19099, 0.16741, 0.40297, 0.67436, 0.67836, 0.68609, 0.68579, 0.68579, 0.68084, 0.68071, 0.63927, 0.61924, 0.64336, 0.69337, 0.69351, 0.67696, 0.65248, 0.56217, 0.43904, 0.34922, 0.34976, 0.34976, 0.19922, 0.19938, 0.18583, 0.1998, 0.064478, 0.064478, 0.054858, 0.050357, 0.050326, 0.02112, 0.021195, 0.021195, 0.021195, 0.019747, 0.037018, 0.030758, 0.030828, 0.023504, 0, 0, 0, 0, 0.078565, 0.074795, 0.074795, 0.17327, 0.17327, 0.18739, 0.1785, 0.20342, 0.25836, 0.33917, 0.49566, 0.49547, 0.49566, 0.40857, 0.36257, 0.41137, 0.41137, 0.39843, 0.39843, 0.39843, 0.46205, 0.55809, 0.46209, 0.4643, 0.18412, 0.18461, 0.18436, 0.1401, 0.25959, 0.23075, 0.23075, 0.23049, 0.23049, 0.23018, 0.21071, 0.15563, 0.14821, 0.14803, 0.17356, 0.16675, 0.16693, 0.23335, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"hépatite": {
men: [0.32389, 0.33711, 0.45207, 0.45207, 0.44855, 0.36061, 0.40217, 0.39227, 0.21341, 0.20485, 0.17228, 0.16446, 0.1503, 0.26284, 0.55247, 0.62493, 0.62882, 0.63322, 0.63513, 0.61456, 0.56642, 0.56668, 0.55332, 0.5716, 0.5716, 0.57438, 0.57978, 0.57562, 0.46075, 0.2804, 0.17767, 0.15585, 0.15585, 0.20593, 0.2875, 0.17517, 0.25354, 0.15292, 0.15292, 0.16372, 0.09178, 0.077145, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021227, 0.026175, 0.027061, 0.15417, 0.15112, 0.15112, 0.17305, 0.16612, 0.20313, 0.21612, 0.20242, 0.21764, 0.21159, 0.23116, 0.19715, 0.21901, 0.1671, 0.082096, 0.082904, 0.082904, 0.091056, 0.12591, 0.08787, 0.088178, 0.10082, 0.099126, 0.095242, 0.083852, 0.15, 0.13258, 0.17832, 0.20562, 0.19862, 0.18544, 0.18261, 0.14419, 0.1621, 0.1894, 0.18077, 0.18948, 0.21489, 0.23456, 0.062264, 0.045782, 0.042469, 0.039035, 0.04082, 0.0424, 0.039137, 0.033909, 0.033357, 0.009943, 0.0097414, 0.0095543, 0.0087363], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise collective": {
men: [0.31656, 0.31592, 0.35255, 0.35255, 0.35262, 0.31532, 0.20401, 0.20418, 0.1668, 0.16684, 0.16714, 0.16703, 0.13526, 0.33693, 0.66018, 0.62452, 0.55325, 0.553, 0.553, 0.553, 0.55289, 0.55286, 0.49864, 0.49843, 0.49843, 0.49853, 0.55056, 0.5644, 0.33675, 0.1385, 0.14269, 0.1429, 0.1429, 0.1429, 0.14302, 0.14285, 0.2223, 0.22267, 0.22267, 0.22267, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18311, 0.10913, 0.10907, 0.10897, 0.089232, 0.089086, 0.13122, 0.13122, 0.17202, 0.17202, 0.17202, 0.19283, 0.19295, 0.19299, 0.050818, 0.10141, 0.10138, 0.10141, 0.40127, 0.21123, 0.21102, 0.21102, 0.13209, 0.13209, 0.13209, 0.13202, 0.13194, 0.13204, 0.12693, 0.033909, 0.033998, 0.033953, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.067015, 0.16047, 0.16047, 0.16065, 0.16065, 0.16066, 0.16066, 0.16066, 0.16068, 0.16068, 0.161, 0.19411, 0.16099, 0.26497, 0.11251, 0.11251, 0.11251, 0.11251], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"salles de shoot": {
men: [0.23558, 0.33316, 0.36533, 0.36533, 0.3654, 0.34658, 0.33951, 0.44384, 0.42924, 0.42936, 0.41053, 0.41025, 0.39286, 0.26181, 0.64508, 0.59045, 0.49786, 0.4279, 0.39946, 0.35999, 0.34317, 0.33409, 0.29217, 0.29067, 0.28629, 0.28634, 0.28105, 0.28902, 0.17636, 0.081324, 0.076138, 0.061673, 0.062613, 0.06003, 0.063717, 0.051721, 0.025221, 0.020133, 0.021266, 0.021266, 0.02192, 0.019426, 0.0085158, 0.0084095, 0.0084095, 0.012032, 0.014501, 0.032343, 0.032685, 0.16762, 0.16751, 0.14386, 0.14377, 0.14365, 0.18072, 0.36212, 0.25725, 0.20257, 0.22857, 0.21528, 0.21528, 0.20986, 0.21246, 0.13717, 0.13689, 0.15041, 0.15036, 0.15041, 0.15039, 0.12661, 0.13945, 0.15803, 0.061059, 0.069831, 0.069831, 0.074555, 0.15309, 0.25752, 0.25875, 0.28393, 0.28468, 0.2843, 0.28447, 0.16987, 0.10406, 0.10406, 0.10394, 0.098894, 0.098759, 0.098819, 0.067598, 0.067632, 0.061947, 0.052418, 0.052418, 0.052477, 0.052477, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infection au vih": {
men: [0.41443, 0.4136, 0.4268, 0.4268, 0.42688, 0.64008, 0.51137, 0.96536, 0, 0, 0, 0, 0, 0, 0, 0, 0.95584, 0.95541, 0.95541, 0.95541, 0.95522, 0.95518, 0.95467, 0.95429, 0.95429, 0.95447, 0.95446, 0.95487, 0.36485, 0.36672, 0.22806, 0.22841, 0.22841, 0.22841, 0.2286, 0.19527, 0.19554, 0.19587, 0.19587, 0.19587, 0.19589, 0.19577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97528, 0.5348, 0.40181, 0.40181, 0.40181, 0.39956, 0.39956, 0.34232, 0.34232, 0.34253, 0.34261, 0.34192, 0.34202, 0.34189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surveillance médicale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.70568, 0.76139, 0.67133, 0.69193, 0.70356, 0.70356, 0.70341, 0.65408, 0.65374, 0.65347, 0.65347, 0.6536, 0.65359, 0.65387, 0.53026, 0.19739, 0.30477, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96471, 0.96471, 0.96471, 0.96471, 0.9653, 0.9655, 0.96357, 0.96386, 0.96349, 0.96386, 0.96373, 0.96476, 0.96381, 0.96381, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"voie intraveineuse": {
men: [0.67637, 0.67502, 0.67425, 0.67425, 0.67437, 0.62437, 0.62576, 0.661, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.50682, 0.50655, 0.50635, 0.50635, 0.50645, 0.50644, 0.50666, 0.96471, 0.96966, 0.97199, 0.97348, 0.97348, 0.97348, 0.97426, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.12014, 0.10918, 0.08909, 0.094799, 0.13295, 0.10738, 0.10723, 0.1073, 0.22343, 0.22211, 0.22211, 0.22186, 0.22186, 0.22156, 0.14953, 0.16423, 0.21673, 0.21648, 0.17423, 0.22532, 0.22557, 0.22557, 0, 0, 0, 0, 0, 0, 0.30944, 0.17217, 0.17217, 0.17245, 0.27803, 0.27803, 0.27803], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gel microbicide": {
men: [0.19203, 0.19165, 0.19143, 0.19143, 0.1569, 0.18754, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96624, 0.9619, 0.96133, 0.10817, 0.077915, 0.077787, 0.077787, 0.077787, 0.077352, 0.077352, 0.077352, 0.077352, 0.077399, 0.077415, 0.064254, 0.062632, 0.062608, 0, 0, 0, 0, 0, 0, 0, 0, 0.47525, 0.47493, 0.47529, 0.47756, 0.97113, 0.97369, 0.97239, 0.97296, 0.96851, 0.9714, 0.9714, 0.97031, 0.97031, 0.96898, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"enjeu sanitaire": {
men: [0.69665, 0.79693, 0.79601, 0.79601, 0.79616, 0.79693, 0.75458, 0.75521, 0, 0, 0, 0, 0, 0, 0.86774, 0.70036, 0.70037, 0.69531, 0.65446, 0.63692, 0.63679, 0.63676, 0.602, 0.60176, 0.60176, 0.60187, 0.62605, 0.6451, 0.26698, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions d' hygiène": {
men: [0.38732, 0.38655, 0.3861, 0.3861, 0.33795, 0.49183, 0.49292, 0.47034, 0, 0, 0, 0, 0, 0, 0.11283, 0.19411, 0.18328, 0.17179, 0.17546, 0.17179, 0.17176, 0.16989, 0.19166, 0.24723, 0.23912, 0.23917, 0.23916, 0.26641, 0.2135, 0.11169, 0.11862, 0.1347, 0.1347, 0.14104, 0.14115, 0.13864, 0.060129, 0.034673, 0.038607, 0.038607, 0.038612, 0.051165, 0.049866, 0.055963, 0.06263, 0.06263, 0.06263, 0.06263, 0.055047, 0.036321, 0.036298, 0, 0, 0, 0, 0, 0, 0, 0.061888, 0.061888, 0.061888, 0.061888, 0.066269, 0.095357, 0.088354, 0.076874, 0.094981, 0.12201, 0.1307, 0.14555, 0.14541, 0.14541, 0.074669, 0.074669, 0.062039, 0.062007, 0.061965, 0.062012, 0.070617, 0.09827, 0.098529, 0.098397, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"virus du sida": {
men: [0.39175, 0.39097, 0.40744, 0.40744, 0.4794, 0.7697, 0.77141, 0.70653, 0.40645, 0.34202, 0, 0, 0, 0, 0.11543, 0.32022, 0.32023, 0.28345, 0.28345, 0.24024, 0.24019, 0.28917, 0.47402, 0.53855, 0.53855, 0.48446, 0.48445, 0.54293, 0.62277, 0.1911, 0.18288, 0.19021, 0.19021, 0.20245, 0.20261, 0.17782, 0.084378, 0.03778, 0.03778, 0.040539, 0.038195, 0.03627, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.19164, 0.19164, 0.19164, 0.19164, 0.16371, 0.20905, 0.20863, 0.11946, 0.11941, 0.11946, 0.10376, 0.097676, 0.09758, 0.09758, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conditions sanitaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.21897, 0.43187, 0.61019, 0.6102, 0.60993, 0.60993, 0.62501, 0.58681, 0.65767, 0.57834, 0.61506, 0.61506, 0.61518, 0.63143, 0.62032, 0.52563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.013617, 0.019433, 0.019414, 0.019414, 0.019511, 0.020199, 0.020199, 0.031042, 0.028284, 0.2406, 0.24174, 0.39376, 0.3948, 0.39427, 0.24754, 0.47649, 0.47792, 0.15314, 0.073594, 0.056617, 0.045715, 0.044144, 0.044209, 0.044231, 0.042305, 0.027419, 0.027419, 0.02745, 0.02745, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réduire la consommation": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.44529, 0.55102, 0.56965, 0.55678, 0.55759, 0.5468, 0.53973, 0.52203, 0.52175, 0.52887, 0.52092, 0.52102, 0.52101, 0.52341, 0.51565, 0.28367, 0.11323, 0.12457, 0.12457, 0.12457, 0.099198, 0.072809, 0.056942, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.076085, 0.066287, 0.086054, 0.083615, 0.083647, 0.083635, 0.078118, 0.080769, 0.080501, 0.10163, 0.11371, 0.10733, 0.10998, 0.10634, 0.056184, 0.06117, 0.028991, 0.02597, 0.024055, 0.023443, 0.026377, 0.024283, 0.026719, 0.021133, 0.021133, 0.022542, 0.024343, 0.023101, 0.023113, 0.022819, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"assistance humanitaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97482, 0.97482, 0.97482, 0.97495, 0.97495, 0.97684, 0.97682, 0.97583, 0.97583, 0.97739, 0.97739, 0.97739, 0.97739], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues injectables": {
men: [0.19372, 0.19334, 0.15299, 0.2198, 0.21984, 0.25866, 0.25924, 0.31736, 0, 0, 0, 0, 0, 0, 0, 0.25838, 0.95404, 0.95362, 0.17742, 0.17742, 0.31509, 0.31508, 0.44517, 0.44499, 0.44499, 0.44508, 0.44507, 0.44526, 0.44745, 0.40372, 0.40469, 0.40531, 0.64711, 0.64711, 0.97616, 0.97502, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"drogues dures": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96152, 0.36982, 0.42437, 0.42437, 0.2716, 0.27155, 0.29737, 0.29722, 0.2971, 0.2971, 0.29715, 0.29715, 0.29728, 0.22493, 0.1711, 0.19382, 0.099427, 0.099427, 0.13712, 0.13723, 0, 0, 0, 0, 0, 0, 0.073525, 0.11839, 0.11881, 0.11881, 0.11881, 0.11881, 0.13526, 0.135, 0.17077, 0.17066, 0.32171, 0.32151, 0.32124, 0.32144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31057, 0.24587, 0.24587, 0.2459, 0.2459, 0.24638, 0.24637, 0.24612, 0.24612, 0.24651, 0.24651, 0.24651, 0.24651], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"charge virale": {
men: [0.16139, 0.16106, 0.19572, 0.19572, 0.22513, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38272, 0.38468, 0.38561, 0.3862, 0.3862, 0.3862, 0.38651, 0.38606, 0.44752, 0.44827, 0.44827, 0.44827, 0.44833, 0.34451, 0, 0, 0, 0, 0, 0, 0.27981, 0.28044, 0.28026, 0.27901, 0.27884, 0.2786, 0.20742, 0.25394, 0.25394, 0.25394, 0.43771, 0.43771, 0.43771, 0.32729, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.032656, 0.032588, 0.0276, 0.026874, 0.026237, 0.025799, 0.025681, 0.025758, 0.032919, 0.0346, 0.0346, 0.034553, 0.043528, 0.07509, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risques de contamination": {
men: [0.13749, 0.15334, 0.15543, 0.15543, 0.15546, 0.1348, 0.046094, 0.0901, 0.086124, 0.18904, 0.09252, 0.10065, 0.1006, 0.12789, 0.12705, 0.26879, 0.38406, 0.38389, 0.38389, 0.38389, 0.31154, 0.33032, 0.32188, 0.32175, 0.35162, 0.3288, 0.32879, 0.32893, 0.29231, 0.22921, 0.22976, 0.23011, 0.23011, 0.23011, 0.26761, 0.099065, 0.13532, 0.13554, 0.13554, 0.16838, 0.1684, 0.13121, 0.15447, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021041, 0.020525, 0.02012, 0.021908, 0.023523, 0.025723, 0.025723, 0.075911, 0.080429, 0.078618, 0.078993, 0.079274, 0.078064, 0.07796, 0.10076, 0.094483, 0.071779, 0.067676, 0.0676, 0.064208, 0.06412, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"risque infectieux": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97103, 0.77821, 0.77844, 0.77814, 0.77844, 0.77833, 0.45858, 0.45813, 0.45813, 0.46042, 0.46042, 0.46042, 0.46018, 0.45987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.04367, 0.13341, 0.37062, 0.37121, 0.24444, 0.24444, 0.24444], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"anrs": {
men: [0.2999, 0.2993, 0.31376, 0.35242, 0.36422, 0.32668, 0.093265, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.213, 0.2918, 0.29211, 0.19278, 0.21128, 0.21128, 0.21128, 0.21128, 0.21087, 0.21134, 0.34883, 0.34727, 0.34706, 0.34677, 0.20377, 0.17506, 0.11853, 0.17188, 0.17091, 0.17091, 0.17091, 0.17091, 0.17102, 0.17106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10565, 0.068352, 0.054601, 0.049851, 0.048381, 0.035928, 0.098701, 0.098758, 0.11642, 0.11677, 0.12223, 0.12209, 0.12209, 0.12192, 0.094122, 0.12291, 0.15725, 0.18237, 0.19412, 0.60624, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Hépatite virale": {
men: [0.066845, 0.066712, 0.070689, 0.070689, 0.070702, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.072093, 0.072095, 0.072063, 0.072063, 0.082446, 0.22822, 0.29276, 0.2926, 0.75352, 0.75352, 0.75366, 0.58233, 0.40718, 0.40918, 0.352, 0.32664, 0.32714, 0.32714, 0.32714, 0.29644, 0.2538, 0.2403, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10746, 0.10746, 0.10746, 0.084381, 0.08741, 0.098698, 0.11725, 0.099593, 0.099555, 0.099593, 0.07056, 0.055875, 0.05582, 0.05582, 0, 0, 0, 0, 0, 0.054559, 0.054197, 0.055586, 0.040373, 0.040319, 0.044578, 0.052966, 0.053124, 0.053124, 0.053064, 0.053064, 0.052992, 0.058514, 0.07928, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.044508, 0.047626, 0.044947, 0.045019, 0.045019, 0.041282, 0.041282], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"santé sexuelle": {
men: [0.37683, 0.62817, 0.62744, 0.62744, 0.57996, 0.51038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9707, 0.97289, 0.97228, 0.094431, 0.094374, 0.094294, 0.094353, 0.094199, 0.094199, 0.094199, 0.093671, 0.093671, 0.093671, 0.093671, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.053305, 0.064891, 0.065122, 0.065294, 0.065207, 0.093964, 0.093534, 0.19743, 0.19743, 0.29588, 0.29588, 0.29547, 0.29565, 0.29609, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"suivi médical": {
men: [0.22595, 0.2255, 0.28744, 0.28744, 0.2875, 0.27241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.48143, 0.48143, 0.65771, 0.65758, 0.32135, 0.32118, 0.32105, 0.32105, 0.32112, 0.20367, 0.20611, 0.20712, 0.12613, 0.1133, 0, 0, 0, 0, 0, 0.05196, 0.049238, 0.039583, 0.038042, 0.038457, 0.038361, 0.038402, 0.03451, 0.036096, 0.036096, 0.034893, 0.034893, 0.071519, 0.071927, 0.020545, 0.020109, 0.02673, 0.093742, 0.095546, 0.094569, 0.094569, 0.15604, 0.15517, 0.15517, 0.17366, 0.17366, 0.12991, 0.12994, 0.14832, 0.15967, 0.13232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.029769, 0.029911, 0.027467, 0.030487, 0.035068, 0.040023, 0.044022, 0.032582, 0.031239, 0.030722, 0.030722, 0.034403, 0.036307, 0.023683, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"viande bovine": {
men: [0, 0, 0, 0, 0, 0, 0, 0.97114, 0.97402, 0.59153, 0.59257, 0.59217, 0.5919, 0.59115, 0.58726, 0.58597, 0.58598, 0.58572, 0.54835, 0.54835, 0.4069, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités suédoises": {
men: [0.96045, 0.95853, 0.95743, 0.95743, 0.95761, 0.95853, 0.96065, 0.96145, 0.9643, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 