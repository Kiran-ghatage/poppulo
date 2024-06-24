import logger from '../../utils/logger';

// export async function GET() {
//   try {

//     const res = { "message": { "affenpinscher": [], "african": [], "airedale": [], "akita": [], "appenzeller": [], "australian": ["kelpie", "shepherd"], "bakharwal": ["indian"], "basenji": [], "beagle": [], "bluetick": [], "borzoi": [], "bouvier": [], "boxer": [], "brabancon": [], "briard": [], "buhund": ["norwegian"], "bulldog": ["boston", "english", "french"], "bullterrier": ["staffordshire"], "cattledog": ["australian"], "cavapoo": [], "chihuahua": [], "chippiparai": ["indian"], "chow": [], "clumber": [], "cockapoo": [], "collie": ["border"], "coonhound": [], "corgi": ["cardigan"], "cotondetulear": [], "dachshund": [], "dalmatian": [], "dane": ["great"], "danish": ["swedish"], "deerhound": ["scottish"], "dhole": [], "dingo": [], "doberman": [], "elkhound": ["norwegian"], "entlebucher": [], "eskimo": [], "finnish": ["lapphund"], "frise": ["bichon"], "gaddi": ["indian"], "germanshepherd": [], "greyhound": ["indian", "italian"], "groenendael": [], "havanese": [], "hound": ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"], "husky": [], "keeshond": [], "kelpie": [], "kombai": [], "komondor": [], "kuvasz": [], "labradoodle": [], "labrador": [], "leonberg": [], "lhasa": [], "malamute": [], "malinois": [], "maltese": [], "mastiff": ["bull", "english", "indian", "tibetan"], "mexicanhairless": [], "mix": [], "mountain": ["bernese", "swiss"], "mudhol": ["indian"], "newfoundland": [], "otterhound": [], "ovcharka": ["caucasian"], "papillon": [], "pariah": ["indian"], "pekinese": [], "pembroke": [], "pinscher": ["miniature"], "pitbull": [], "pointer": ["german", "germanlonghair"], "pomeranian": [], "poodle": ["medium", "miniature", "standard", "toy"], "pug": [], "puggle": [], "pyrenees": [], "rajapalayam": ["indian"], "redbone": [], "retriever": ["chesapeake", "curly", "flatcoated", "golden"], "ridgeback": ["rhodesian"], "rottweiler": [], "saluki": [], "samoyed": [], "schipperke": [], "schnauzer": ["giant", "miniature"], "segugio": ["italian"], "setter": ["english", "gordon", "irish"], "sharpei": [], "sheepdog": ["english", "indian", "shetland"], "shiba": [], "shihtzu": [], "spaniel": ["blenheim", "brittany", "cocker", "irish", "japanese", "sussex", "welsh"], "spitz": ["indian", "japanese"], "springer": ["english"], "stbernard": [], "terrier": ["american", "australian", "bedlington", "border", "cairn", "dandie", "fox", "irish", "kerryblue", "lakeland", "norfolk", "norwich", "patterdale", "russell", "scottish", "sealyham", "silky", "tibetan", "toy", "welsh", "westhighland", "wheaten", "yorkshire"], "tervuren": [], "vizsla": [], "waterdog": ["spanish"], "weimaraner": [], "whippet": [], "wolfhound": ["irish"] }, "status": "success" }

//     if (res.status === "success") {
//       logger.log('Data fetched successfully');
//       return Response.json(res.message)
//     }else{
//       throw new Error('Failed to fetch data');
//     }
//   } catch (error) {
//     logger.error('Failed to fetch data');
//     Response.json({ error: 'Failed to fetch data' });
//   }
// }

export async function GET() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    if (!response.status === "success") {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    res.status(200).json(data.message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}