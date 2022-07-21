/* .js files add interaction to your website */

//Random fact generator
var factList = [
  "The fashion industry is the 2nd biggest polluter in the world second to oil",
  "80 billion new pieces of clothing is consumed every year",
  "In one washing machine cycle, a single synthetic garnment generates 1,900 micro plastic fibres",
  "It takes 700 gallons of water to make a cotton shirt",
  "The average American throws out about 82 pounds of textile waste per year",
  "Clothes can take up to 40 years to decompose",
  "95% of textiles can be recycled",
  "A majority of donated clothing are exported overseas",
  "The resale market for secondhand clothing has increased by 53.3% in the last five years",
  "Fast fashion is kept inexpensive because of outsourcing production to low/middle-income countries that don’t have the resources to develop protections and regulations",
  "85% of the clothing Americans consume (nearly 3.8 billion pounds annually) is sent to landfills amounting to 80 pounds per American per year"
];

var facts=document.getElementById("facts");
var factButton=document.getElementById("myButton");
var count=0;

if (factButton) {
  factButton.addEventListener('click',displayQuote);
}
function displayQuote() {
  facts.innerHTML = factList[count];
  count++;
  if (count==factList.length) {
    count=0;
  }
  
}

//Senator script

var displayName=document.getElementById("scriptReturned");
var button=document.getElementById("myButton");

if (myButton) {
  button.addEventListener('click', displayScript);
}

function displayScript() {
  var text=document.getElementById("myText").value;
  var city=document.getElementById("myCity").value;
  displayName.innerHTML="Hello. My name is "+text+". I live in "+city+". I am a constituent, and I am calling on the Senator to support and co-sponsor The FABRIC Act, S4213. America’s 95,000 garment workers often face wage theft and our apparel manufacturers face unfair competition. The FABRIC Act will level the playing field for responsible business, ensure that garment workers are paid fair wages, and promote much needed job growth. By supporting the FABRIC Act, we can accelerate domestic manufacturing and cement the US as the global leader in transparent and equitable clothing production. Thank you for your time.";
}

