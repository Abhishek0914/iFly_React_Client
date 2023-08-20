import React from 'react';
import { Link } from 'react-router-dom';
import indiagate from '../images/India_gate.jpeg';
import marinedrive from '../images/Marine_Drive_Skyline.jpg';
import hawamahal from '../images/Hawa_Mahal.jpeg';
import kapaleeswarartemple from '../images/Kapaleeswarar-Temple.jpg';

const Discover=()=>{

return(
    <div className='discoverheading'>
        <h1 align='center'>Discover the gems of India!</h1>
        <marquee>Click the images to know more...</marquee>
        <br></br>
        <a href="https://en.wikipedia.org/wiki/India_Gate" target='blank'><img src={indiagate} width="245px" height="180px" /></a>
        <br></br>
        India Gate is a prominent war memorial located in New Delhi, India.
            It was built to honor the soldiers of the Indian Army who lost their lives during World War I and the Afghan Wars. Completed in 1931, the monument stands as a majestic archway, reminiscent of the Arc de Triomphe in Paris.
            The architecture combines elements of both Indian and European design, creating a distinctive and grand structure.

            The India Gate is constructed from sandstone and rises to a height of about 42 meters (138 feet). The arch is adorned with intricate carvings and inscriptions, while the names of the soldiers who sacrificed their lives are inscribed on its walls.
            The memorial is surrounded by well-maintained lawns and gardens, making it a popular spot for both locals and tourists to gather, relax, and pay their respects. Especially in the evenings, the area is illuminated, creating a somber yet beautiful atmosphere.
            
            
<br></br>
<a href="https://en.wikipedia.org/wiki/Hawa_Mahal" targer="blank" ><img src={hawamahal} width="245px" height="180px" /></a>
<br></br>Hawa Mahal, also known as the "Palace of Winds," is a stunning architectural marvel located in Jaipur, Rajasthan, India. Built in 1799 by Maharaja Sawai Pratap Singh, it is a unique five-story structure with an intricately designed façade characterized by numerous small windows and latticed screens, which resemble honeycombs or the flow of a breeze.

The purpose of the Hawa Mahal was to provide royal women a vantage point from which they could observe street festivals and daily life in the bustling markets below, while maintaining their privacy and adherence to purdah (seclusion). The lattice work allowed them to see without being seen.

The palace is constructed of red and pink sandstone, reflecting the signature colors of Jaipur's architecture. The design is a fusion of Rajput and Mughal architectural styles, creating a visually striking and ornate appearance. Hawa Mahal's main attraction is its distinctive façade, which offers a blend of artistic craftsmanship, geometric patterns, and intricate detailing.
<br></br>
<a href="https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai" target="blank"><img src={marinedrive} width="245px" height="180px" /></a>
<br></br><span>Marine Drive is an iconic coastal boulevard located in the city of Mumbai, India. Stretching along the Arabian Sea shoreline, it is renowned for its sweeping arc-shaped design, resembling a 'C' when viewed from above. Marine Drive is often referred to as the "Queen's Necklace" due to its appearance at night when the streetlights along the promenade resemble a string of pearls, forming a luminous necklace-like effect.

The promenade is a popular gathering spot for locals and tourists alike, offering stunning views of the sea and the city's skyline. People often come here to take leisurely strolls, enjoy the sea breeze, and witness mesmerizing sunsets over the Arabian Sea. The area is lined with art deco style buildings and luxury apartments, adding to its unique charm.

Marine Drive holds both historical and cultural significance for Mumbai. It has been featured in numerous movies and is a central location for various events and celebrations. Along its stretch, you can find food stalls, vendors selling snacks and refreshments, as well as seating areas for people to relax and enjoy the ambiance. It serves as a symbol of Mumbai's vibrant energy, offering a tranquil escape from the city's bustling urban life.</span>
<br></br>
<a href="https://en.wikipedia.org/wiki/Kapaleeshwarar_Temple" target="blank'"><img src={kapaleeswarartemple} width="245px" height="180px" /></a>
<br></br>
The Kapaleeshwarar Temple is a revered Hindu temple situated in Mylapore, Chennai, India. It is dedicated to Lord Shiva, specifically in the form of Kapaleeshwarar, which translates to "Lord of the Skull." The temple's architecture is a splendid example of Dravidian style, characterized by intricately carved gopurams (towering gateways), ornate pillars, and vibrant sculptures.

The temple complex consists of a main sanctum housing the deity, Lord Kapaleeshwarar, and a separate shrine for the goddess Parvati, known as Karpagambal. The deity is adorned with a unique and distinctive headdress resembling a skull, symbolizing the cyclical nature of life and death.

One of the notable features of the Kapaleeshwarar Temple is its towering gopuram adorned with intricate carvings depicting mythological scenes, deities, and celestial beings. The temple's inner halls and corridors showcase intricate sculptures and ornamental designs that showcase the artistic prowess of the artisans of the time.

The temple holds great cultural and religious significance, attracting devotees, tourists, and scholars alike. It is a hub of religious activities, festivals, and rituals, with the Arubathu Moovar festival being one of the most prominent celebrations held annually.

The Kapaleeshwarar Temple stands as a testament to the rich heritage and spiritual devotion of Chennai, drawing visitors from all walks of life who come to admire its architectural splendor and connect with its spiritual ambiance.

<center>
<br></br>
<form>
    <Link to="/signup"><button className='button2'>Continue your journey</button></Link>
</form>
</center>
</div>
        
);
};

export default Discover;
