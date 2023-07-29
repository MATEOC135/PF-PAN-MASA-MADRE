const product = [
    {
    name:"Mixed mother",
    availability:"true",
    weight: "1kg",
    type: "integral",
    ingredients:["leftovers","water","f lour","salt","yeast"],
    description:"Also known as ladle, it is one of the most used traditional methods. It is made from a piece of bread that we have left over and water, flour, salt and fresh yeast are added.",
    price:"1$",
    image:"https://www.petitchef.es/recetas/otro/pan-mixto-con-masa-madre-eric-kaiser-fid-1183874"
    },
    {
    name:"Japanese silk",
    availability:"true",
    weight: "1kg",
    type:"integral",
    ingredients:["500 g of strength flour" ,"50 g of sugar" ,"8 g of salt" ,"60g of milk" ,"25g cream" ,"50 g butter room temperature" ,"Between 100 and 150 g of water" ,"3 g dry yeast"],
    description:"Japanese silk bread with Vietnamese green rice",
    price:"3$",
    image:"https://casaperris.com/wp-content/uploads/2021/11/163610700477362a8d01e.png",
    },
    {
    name:"pita bread",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["290ml lukewarm water" ,"7 g baker's dry yeast" ,"520 g bread flour" ,"1 teaspoon salt" ,"1 teaspoon of sugar" ,"1 tablespoon olive oil",], 
    description:"Pita bread is a lightly fermented flatbread made from wheat flour, yeast, water, and salt.",
    price:"2.5$",
    image:"http://casaperris.com/wp-content/uploads/2023/04/1509628124300ffffffffbfe76fc8.jpg",
    },
    {
    name:"mini muffins",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["450 g organic zamora flour" ,"300g lukewarm milk" ,"5g salt" ,"5 g baker's dry yeast" ,"medium wheat semolina"],
    description:"It is a kind of round-shaped bread invented in the United States by an immigrant of English origin.",
    price:"3$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/15001170742341aa04ee4.jpg",
    },
    {
    name:"tiger bread",
    availability:"true",
    weight:"1.5kg",
    type:"integral",
    ingredients:["300ml lukewarm water" ,"7 g dry baker's yeast" ,"500 g bread flour" ,"7g salt" ,"35ml sesame oil" ,"75g rice flour" ,"3 g dry baker's yeast" ,"a pinch of salt" ,"3g sugar" ,"8 tablespoons of lukewarm water"],
    description:"Tiger bread is a delicious bread whose origin is attributed to the inhabitants of the Netherlands, specifically Holland.",
    price:"2$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/1510934794580ffffffff8b782b48.jpg"
    },
    {
    name:"turkish plane",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["600ml lukewarm water" ,"11 g baker's dry yeast" ,"920 g bread flour" ,"2 level teaspoons of salt" ,"1 egg" ,"1 level teaspoon of sugar" ,"1 tablespoon oil" ,"black sesame" ,"salt flakes"],
    description:"A type of gastronomy noted for its habitual use of spices and highly influenced by Mediterranean cuisine, normally using olive oil in most recipes.",
    price:"1.50$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/152148688569213e49ad7.png",
    },
    {
    name:"Gluten-free bread",
    availability:"true",
    weight:"1kg",
    type:"salty",
    ingredients:["500 g organic non-gluten flour" ,"8g salt" ,"6 g baker's dry yeast" ,"600 g mineral water" ,"16-18 pitted black olives" ,"a tablespoon of aromatic herbs"],
    description:"Gluten-free bread with olives and aromatic herbs",
    price:"3$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/1499846125868ffffffffa41dc97c.jpg",
    },
    {
    name:"bread with nuts",
    availability:"true",
    weight:"2kg",
    type:"salty",
    ingredients:["80 gr raw almonds" ,"1 tablespoon brown sugar" ,"80 gr of hazelnuts" ,"1 teaspoon dried thyme" ,"80 gr of walnuts" ,"1 teaspoon bicarbonate of soda" ,"40 gr of bread seeds" ,"25 grams of raisins" ,"25 gr of pitted plums" ,"250 ml of vegetable milk" ,"140 gr of pastry flour" ,"A little bit of salt"],
    description:"It is a simple recipe in which we use non-dairy milk and a selection of nuts, which give a special touch to this basic food.",
    price:"7$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/15556572629475c42e448.jpg",
    },
    {
    name:"Spelled and wheat bread",
    availability:"true",
    weight:"1.5kg",
    type:"integral",
    ingredients:["340 ml of lukewarm water" ,"7 g baker's dry yeast" ,"1 egg + 1 white" ,"1 teaspoon apple cider vinegar" ,"335 g flour (wheat)" ,"300 g semi-integral spelled flour" ,"1 level teaspoon of baking soda" ,"10g salt" ,"4 g ground panela" ,"4 garlic cloves" ,"1 tablespoon chopped parsley" ,"olive oil"],
    description:"Spelled and wheat bread with garlic and parsley",
    price:"3.5$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/1520356832934ffffffff8556041a.jpg",
    },
    {
    name:"Wheat, rye and molasses bread",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["340 ml of semi-skimmed milk" ,"juice of half a lemon" ,"200 g organic bread flour" ,"130 g organic whole rye flour" ,"6g salt" ,"10 g baking soda" ,"65 g cane molasses"],
    description:"It is a very healthy bread since it is low in fat, it does not contain refined sugar, essences or oils.",
    price:"1$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/1494864215428ffffffffaf57c853.jpg",
    },
    {
    name:"Bread with nuts and raisins without oven",
    availability:"true",
    weight:"2kg",
    type:"salty",
    ingredients:["60 g mix of nuts and raisins" ,"150 g mineral water" ,"1 g baker's dry yeast" ,"250 g zamorana flour" ,"4g salt" ,"10 g olive oil"],
    description:"Making bread by combining it with healthy, natural ingredients like raisins and nuts intensifies the possibility of how tasty, nutritious, and fun it can be to make your own bread and enjoy it with your loved ones.",
    price:"3$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/15334894428615980fc55.jpg",
    },
    {
    name:"Brioche for the end of the year",
    availability:"true",
    weight:"1.5kg",
    type:"sweet",
    ingredients:["120 ml of lukewarm milk" ,"7 g baker's dry yeast" ,"500 g flour of strength" ,"70g sugar" ,"a pinch of salt" ,"1 tablespoon of anise liqueur" ,"1/2 teaspoon ground cinnamon" ,"pulp of 1 vanilla pod" ,"zest of a tangerine" ,"3 eggs" ,"90g butter" ,"1 egg" ,"1 tablespoon milk"],
    description:"It can be very interesting to serve it with the starters and for our guests to have the brioche with pate or cheese. The sweet, spicy flavor of the brioche and the salty flavor of the pate or cheese contrast very well.",
    price:"4$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/15146201121922c787ddb.jpg",
    },
    {
    name:"Coca de Cacaus",
    availability:"true",
    weight:"1kg",
    type:"salty",
    ingredients:["2 glasses of wheat flou" ,"1/2 glass of extra virgin olive oil" ,"1/2 glass of white wine" ,"1 teaspoon salt" ,"1 handful of raw peanuts with skin" ,"1 pinch of Maldon salt"],
    description:"It is a flat salty pasta similar to a cookie, which is used to accompany the traditional lunches of the region.",
    price:"3$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/1508916567321ffffffffca14031d.jpg",
    },
    {
    name:"Homemade bread",
    availability:"true",
    weight:"1kg",
    type:"salty",
    ingredients:["7 g dry baker's yeast" ,"265g milk" ,"400 g pastry flour (W-250)" ,"15 g olive oil" ,"7g salt" ,"5g sugar"],
    description:"Nothing richer than homemade sliced bread, it is a much softer and longer-lasting bread than common bread and although you may find it in bakeries and supermarkets, nothing better than artisan bread, softer and more solid.",
    price:"5$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/149052118851020f52ccf.jpg",
    },
    {
    name:"Wheat and rye flatbreads",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["25 g rye flakes" ,"25g butter" ,"110ml boiling water" ,"110 ml cold water" ,"11 g dry baker's yeast" ,"40g honey" ,"215 g medium high strength flour (W 250)" ,"145 g white rye flour" ,"1 teaspoon salt"],
    description:"The main and striking characteristic is precisely its thinness, reaching a measure of thickness that does not exceed one centimeter.",
    price:"4$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/148916753566926f757f2.jpg",
    },
    {
    name:"Forner's Coke",
    availability:"true",
    weight:"2kg",
    type:"sweet",
    ingredients:["320 ml water (room temperature)" ,"3 g dry baker's yeast" ,"50 ml of extra virgin olive oil" ,"500 g organic flour" ,"40g sugar" ,"10g salt" ,"Sugar for dusting" ,"Anisette"],
    description:"It is a flat sugared bread, baked at high intensity temperatures, characterized by its delicate olive oil dressing and its touch of anise liqueur.",
    price:"10$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/148899724700712d8cbb2.jpg",
    },
    {
    name:"Japanese brioche recipe (tangzhong technique)",
    availability:"true",
    weight:"2kg",
    type:"sweet",
    ingredients:["25 g flour of strength" ,"60g milk" ,"60g water" ,"8 g baker's dry yeast" ,"175g cold milk" ,"60g sugar" ,"1/2 teaspoon salt" ,"ground cardamom" ,"1 egg" ,"360 g flour" ,"60g butter" ,"Milk"],
    description:"Brioche is known as a homemade bread of French origin that in ancient times combined the recipe for a cake with that of a bread.",
    price:"7$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/14849417541842d33850a.jpg",
    },
    {
    name:"naan bread with zaatar",
    availability:"true",
    weight:"1kg",
    type:"salty",
    ingredients:["200 g bread flour" ,"100 g flour of strength" ,"5 g baker's dry yeast" ,"100 g lukewarm water" ,"1 teaspoon salt" ,"1 teaspoon of sugar" ,"2 tablespoons of olive oil" ,"1 creamy yogurt" ,"Zaatar" ,"Olive oil to paint the breads"],
    description:"Naan Bread is a type of flat bread originating in Central Asia, which is made from traditional ingredients such as wheat flour, yeast and the different species that make up Zaatar.",
    price:"5$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/148450930269775c8c7d6.jpg",
    },
    {
    name:"Dried tomato focaccia",
    availability:"true",
    weight:"1.5kg",
    type:"integral",
    ingredients:["335 g Zamora white flour" ,"235 ml of lukewarm water" ,"35 g extra virgin olive oil" ,"7g salt" ,"4 g baker's dry yeast" ,"dehydrated tomatoes" ,"Kalamata olive pate" ,"Thyme" ,"Oregano"],
    description:"Its extraordinary Mediterranean-influenced ingredients with the combinations of spices, condiments, fresh tomatoes, the presence of olives and olive oil, make its flavors transcend the world, displaying native gastronomy.",
    price:"5$",
    image:"https://casaperris.com/wp-content/uploads/2023/04/14815718707366b94dea9.jpg",
    },
    {
    name:"Whole wheat bread",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["30 g brewer's yeast" ,"1/2 cup of lukewarm water" ,"750 g of wholemeal flour" ,"2 teaspoons of salt" ,"30g margarine" ,"required amount of milk"],
    description:"Whole wheat bread is defined as the perishable product resulting from cooking a dough obtained by mixing whole wheat flour, edible salt and drinking water.",
    price:"3$",
    image:"https://cdn.doers.video/embed/bc4e4b75c9c1b1c72c207291d9a1183cac2ed31526384852/beneficios-pan-integral.jpg",
    },
    {
    name:"gluten bread",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["200 g of rice flour" ,"40 g of potato starch or cassava flour" ,"2 eggs" ,"1 teaspoon salt" ,"1 shot of soda" ,"required amount of milk" ,"oil"],
    description:"Gluten is a set of small proteins, contained exclusively in the seeds of dry cereals, mainly wheat, but also barley and rye, as well as any of their varieties and hybrids.",
    price:"4$",
    image:"https://www.mujerdeelite.com/fotos/591/591_l.jpg",
    },
    {
    name:"Bran bread",
    availability:"true",
    weight:"1kg",
    type:"salty",
    ingredients:["1 1/2 cup wheat flour" ,"1 1/2 cups coarse bran" ,"1 teaspoon of fine salt" ,"40 g brewer's yeast" ,"1 cup of lukewarm water"],
    description:"Bran bread is a pseudo-wholemeal bread, that is, it is not 100% wholemeal. In its preparation, refined or white flour is used to which whole fragments of bran -the crust of the wheat grain- are artificially added.",
    price:"2$",
    image:"https://cdn0.recetasgratis.net/es/posts/1/6/9/pan_de_salvado_de_trigo_28961_600_square.jpg"
    },
    {
    name:"apple bread",
    availability:"true",
    weight:"2kg",
    type:"sweet",
    ingredients:["2 eggs" ,"3 cups of flour" ,"1 cup of oil" ,"2 cups apple, diced" ,"1 cup of raisins" ,"1 cup walnut, chopped" ,"2 tablespoons of royal" ,"1/2 teaspoons baking soda" ,"1 cup of sugar"],
    description:"It is a bread that can be eaten alone, with butter, to accompany a good cheese and a glass of red wine. Although traditionally this type of bread is prepared at Christmas, we like to taste it all year round.",
    price:"3$",
    image:"https://enharinado.com/wp-content/uploads/2022/02/Pan-de-manzana.jpg",
    },
    {
    name:"sesame bread",
    availability:"true",
    weight:"1kg",
    type:"integral",
    ingredients:["80 ml. warm water" ,"12 gr fresh yeast" ,"350 gr flour of strength" ,"40 ml. extra virgin olive oil" ,"12 gr white sugar" ,"6 gr fine salt" ,"70 gr sesame seeds"],
    description:"Sesame bread, fluffy very rich, with a crispy crust and a tight crumb. Sesame seed is one of the oldest known oilseed crops, domesticated over 3,000 years ago.",
    price:"2$",
    image:"https://placeralplato.com/files/2017/05/pancitos-de-sesamo-640x480.jpg?width=1200&enable=upscale",
    },
    {        
        name: "Oat wheat and black sesame crackers",
        availability: "true",
        weight:"1.5kg",
        type:"salty",
        ingredients:[ "40 g deodorized coconut oil (no smell or taste)","90 g of milk (can be of animal origin or not)","90 g fine oat flakes","15 g oat bran","90g loose strength wheat flour","10 g black sesame","5 g chemical yeast","3g salt","5g sugar"],
        description: "Heat the coconut oil together with the milk until the oil melts. 2. In a large container we mix the oat flakes, the bran and the mixture of oil and milk. Mix well and let rest for 15 minutes. 3. Heat the oven to 200ºC. 4. To the previous mixture we add the wheat flour, the sesame, the yeast, the salt and the sugar. We love until there is a uniform mass. 5.",
        price: "7$",
        image: "https://casaperris.com/wp-content/uploads/2023/05/1480359625639ffffffff8e0feb3a.jpg"
    },
     {
        name: "Recipe to make breadsticks with Provencal herbs",
        availability: "true",
        weight:"1kg",
        type:"integral",
        ingredients:[ "125 g water -11","evadura seca de panadero -300 g","bread flour (250g + 50 g) -20 g ","olive oil -4 g","salt -8g","sugar -1","egg -1"],
        description: "Heat the water (the temperature should be around 36º-37º) and add the dry yeast. Mix well. -In a large container, mix 250 g of flour, oil, salt, sugar, Provencal herbs and egg. The mixture will be sticky.",
        price: "13$",
        image: "https://casaperris.com/wp-content/uploads/2023/05/1478981340995ffffffff82330e1b.jpg"
    },
     {
        name: "torpedo bread",
        availability: "true",
        weight:"1kg",
        type:"salty",
        ingredients:[ "400 grams of flour","100 grams of sugar (½ cup)","60 grams of butter","1 egg","120 milliliters of milk (½ cup)","1 Teaspoon vanilla extract","3 drops of orange blossom water","15 grams of fresh yeast","1 pinch of salt"],
        description: "The first step to make torpedo bread is to mix the fresh yeast with a tablespoon of sugar and warm milk in a container. Reserve it in a place without draft until it forms a foam. You can skip this step if you want, it's just to make sure the yeast is working properly.",
        price: "12$",
        image: "https://cdn0.recetasgratis.net/es/posts/7/5/7/pan_torpedo_76757_paso_10_600.webp"
    },
     {
        name: "Yeast Orange Bread Recipe",
        availability: "true",
        weight:"1kg",
        type:"sweet",
        ingredients:[ "500 grams of flour","1 egg","100 cubic centimeters of orange juice","1 orange zest","100 cubic centimeters of milk","25 grams of fresh yeast","50 grams of sugar (¼ cup)","1 dessert spoon of vanilla essence","50 grams of butter","1 pinch of salt"],
        description: "To start preparing the yeast bread with orange, mix the softened butter with the sugar, the vanilla essence and the grated orange peel in a bowl. Reserve the rest of the fruit to use the juice later.",
        price: "15$",
        image: "https://cdn0.recetasgratis.net/es/posts/8/5/7/pan_de_naranja_con_levadura_76758_paso_8_600.webp"
    },
     {
        name: "anise sticks",
        availability: "true",
        weight:"1kg",
        type:"sweet",
        ingredients:[ "125 grams of flour 000","1 tablespoon of oil","1 dessert spoon of anise seeds","1 pinch of pepper","1 pinch of salt","65 milliliters of water (1 third cup)","1 dessert spoon of dry yeast"],
        description: "To start preparing the anise sticks, in a bowl mix the flour with a pinch of salt, pepper and anise seeds. If you want to make this sweet recipe, you will find more details on how to replace salt and pepper at the end of the recipe.",
        price: "16$",
        image: "https://cdn0.recetasgratis.net/es/posts/1/4/7/palitos_de_anis_76741_paso_5_600.webp"
    },
     {
    
        name: "Chancay Bread",
        availability: "true",
        weight:"2kg",
        type:"sweet",
        ingredients:[ "400 grams of flour","110 grams of sugar","4 grams of salt","20 grams of lard or butter","210 grams of water","6 grams of instant dry yeast","2 yolks","1 jet of chancay or vanilla essence","yellow vegetable coloring or turmeric c/n"],
        description: "Chancay bread is a sweet, soft and spongy cake-like bun that according to stories was created by Don Manuel de Santa Cruz in 1883 in a city north of Lima that gives it its name, Chancay. These are made from a sheet of soft rolls with a golden crust and a yellowish, aromatic crumb.",
        price: "1$",
        image: "https://cdn0.recetasgratis.net/es/posts/7/2/7/pan_chancay_76727_600.webp"
    },
]


module.exports = product;