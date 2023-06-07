import React from 'react';
import block1 from '../assets/block1.jpg';
import kooning1 from '../assets/Kooning-1.jpg';
import picasso1 from '../assets/picasso-1.jpg';
import picasso2 from '../assets/picasso-2.jpg';
import dali1 from '../assets/Salvador-Dali-1.jpg';
import warhol1 from '../assets/Warhol-1.jpg';

import { Divider } from '@mui/material';

const artisticTrends = [
  {
    name: 'Cubism',
    desc: 'Developed by Pablo Picasso and Georges Braque, Cubism revolutionized the way we perceive space and form. This movement sought to depict objects from multiple viewpoints simultaneously, breaking them down into geometric shapes and fragmented forms.',
    authors: [
      {
        name: 'Pablo Picasso',
        desc: `Picasso, a Spanish artist, is widely recognized as one of the most influential artists of the 20th century. His innovative approach to art and groundbreaking works, such as "Les Demoiselles d'Avignon" and "Guernica," transformed the art world and solidified his status as a Cubist pioneer.`,
      },
      {
        name: 'Georges Braque',
        desc: 'Braque, a French painter and sculptor, collaborated closely with Picasso in the development of Cubism. His contributions to the movement, including works like "Violin and Candlestick" and "The Portuguese," showcased his mastery of fragmented forms and abstracted perspectives.',
      },
    ],
  },
  {
    name: 'Surrealism',
    desc: 'Led by artists such as Salvador Dalí and René Magritte, Surrealism aimed to unlock the power of the unconscious mind. It explored dreamlike imagery, irrational juxtapositions, and symbolic elements to delve into the realms of the subconscious.',
    authors: [
      {
        name: 'Salvador Dali',
        desc: 'Dali, a Spanish surrealist painter, is known for his eccentric and dreamlike imagery. His works, such as "The Persistence of Memory" and "The Elephants," explored the subconscious and challenged traditional notions of reality with his intricate and imaginative compositions.',
      },
      {
        name: 'René Magritte',
        desc: `Magritte, a Belgian surrealist artist, is celebrated for his thought-provoking and visually captivating paintings. Through works like "The Son of Man" and "The Treachery of Images," he challenged the viewers' perception of reality by juxtaposing ordinary objects in unexpected contexts and playing with visual representation.`,
      },
    ],
  },
  {
    name: 'Abstract Expressionism',
    desc: `Abstract Expressionism, embodied by artists like Jackson Pollock and Willem de Kooning, emphasized spontaneous, gestural brushwork and the expression of emotional intensity. It aimed to convey the artist's inner experiences and subjective responses to the world.`,
    authors: [
      {
        name: 'Jackson Pollock',
        desc: 'Pollock, an American painter, is renowned for his unique style of drip painting. His large-scale, energetic works, such as "Number 1, 1950 (Lavender Mist)" and "Autumn Rhythm," expressed his inner emotions and showcased the spontaneous and gestural brushwork that became synonymous with Abstract Expressionism.',
      },
      {
        name: 'Willem de Kooning',
        desc: `De Kooning, a Dutch-American artist, played a pivotal role in the Abstract Expressionist movement. His paintings, such as "Woman I" and "Excavation," demonstrated his ability to combine gestural brushwork with figurative elements, capturing the emotional intensity and complexity of human expression.`,
      },
    ],
  },
  {
    name: 'Pop Art',
    desc: 'Pop Art, popularized by artists such as Andy Warhol and Roy Lichtenstein, celebrated and critiqued mass culture and consumerism. It incorporated imagery from popular culture, advertising, and media, often utilizing bold colors and techniques borrowed from commercial art.',
    authors: [
      {
        name: 'Andy Warhol',
        desc: `Warhol, an American artist, is one of the central figures of the Pop Art movement. His works, including the iconic Campbell's Soup Cans and Marilyn Monroe portraits, celebrated and critiqued mass culture and consumerism while employing techniques borrowed from commercial art, such as silkscreen printing.`,
      },
      {
        name: 'Roy Lichtenstein',
        desc: `Lichtenstein, an American pop artist, is known for his bold and vibrant paintings inspired by comic book imagery. His works, like "Whaam!" and "Drowning Girl," transformed popular culture into high art, exploring themes of consumerism, media, and the boundary between mass-produced and fine art.`,
      },
    ],
  },
];

const Home = () => {
  return (
    <div className='p-5 rounded-md text-justify'>
      <h2 className='text-5xl text-center text-app my-6'>Art of the 20th century</h2>

      <h4 className='text-xl text-app mb-2'>General information and description</h4>

      <div className='flex flex-col md:flex-row items-start gap-5 relative'>
        <div className='flex-half'>
          The 20th century was a pivotal era in the art world, characterized by significant artistic
          developments and revolutions that reshaped the way we perceive and create art. During this
          time, artists pushed boundaries, challenged conventions, and experimented with new forms
          of expression. The impact of 20th century art extends beyond the art world, influencing
          and reflecting the cultural and social changes of the time.
        </div>
        <div className='flex-half text-center mb-5'>
          <img className='rounded-md' src={picasso2} alt='img1' />
          <label>Author: Pablo Picasso</label>
        </div>
      </div>

      <br />

      <ol className='flex flex-col gap-5'>
        <Divider />
        <li>
          Art movements and revolutions emerged throughout the century, each leaving a distinct mark
          on the trajectory of art history. From the early 1900s to the late 1990s, artists sought
          to break free from traditional artistic norms and explore new artistic territories. These
          movements encompassed various styles, techniques, and ideologies, representing a diverse
          range of artistic expressions.
        </li>
        <Divider />
        <li>
          The significance of 20th century art reaches far beyond the canvas. It not only
          transformed the way we perceive art but also challenged societal norms, questioned
          established power structures, and reflected the dynamic nature of the changing world.
          Through their creative endeavors, artists of the 20th century played a pivotal role in
          shaping cultural and social discourses, leaving a lasting impact that continues to
          resonate with audiences today.
        </li>
        <Divider />
        <li>
          <div>
            <h3 className='text-xl text-app'>
              The transition from traditional art to modern and contemporary forms:
            </h3>
            <div className='flex flex-col sm:flex-row items-start gap-5 relative'>
              <div className='flex-half float-right text-center mb-5'>
                <img className='rounded-md' src={kooning1} alt='img1' />
                <label>Author: Willem de Kooning</label>
              </div>
              <div className='flex-half flex flex-col gap-5'>
                <div>
                  The 20th century witnessed a radical departure from traditional artistic
                  practices. Artists began to challenge the long-standing notions of representation
                  and realism, seeking new ways to convey their ideas and emotions. This shift gave
                  rise to the exploration of abstraction, symbolism, and subjective interpretations
                  in art.
                </div>
                <Divider />
                <div>
                  <h3 className='text-xl text-app'>
                    The impact of technological advances on artistic expression:
                  </h3>
                  echnological advancements in the 20th century had a profound influence on artistic
                  expression. The advent of photography, film, and later digital media
                  revolutionized the visual arts. Artists embraced these technologies, experimenting
                  with new techniques and mediums, such as collage, photomontage, and video art. The
                  integration of technology opened up exciting possibilities for artists to push
                  boundaries and expand the scope of their creative vision.
                </div>
              </div>
            </div>
          </div>
        </li>
        <Divider />
        <li>
          <h3 className='text-xl text-app'>
            The impact of technological advances on artistic expression:
          </h3>
          echnological advancements in the 20th century had a profound influence on artistic
          expression. The advent of photography, film, and later digital media revolutionized the
          visual arts. Artists embraced these technologies, experimenting with new techniques and
          mediums, such as collage, photomontage, and video art. The integration of technology
          opened up exciting possibilities for artists to push boundaries and expand the scope of
          their creative vision.
        </li>
        <Divider />
        <li>
          <div>
            <div>
              <div className='text-center mb-5'>
                <img className='rounded-md m-auto sm:h-[350px]' src={picasso1} alt='img1' />
                <label>Author: Pablo Picasso</label>
              </div>
            </div>
            <div>
              <h3 className='text-xl text-app'>Key movements and styles:</h3> The 20th century
              witnessed the emergence of several influential art movements and styles, each with its
              own unique characteristics and philosophies. Some notable movements include:
              <ol className='flex flex-col gap-7 mt-3'>
                {artisticTrends.map((item, index) => (
                  <li>
                    <span className='text-lg text-app'>
                      {index + 1}. {item.name}
                    </span>
                    <div>{item.desc}</div>
                    <div className='mt-4'>
                      Artists of this direction:
                      <ul className='flex flex-col gap-2'>
                        {item.authors.map((author) => (
                          <li>
                            ● {author.name} - {author.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </li>
        <Divider />
        <li>
          <h3 className='text-xl text-app'>Legacy and Impact of 20th Century Art:</h3>
          <div className='text-center mt-4 mr-4 mb-4 ml-4 lg:mr-0 lg:float-right'>
            <img className='rounded-md m-auto max-h-[300px]' src={dali1} alt='img1' />
            <label>Author: Salvador Dali</label>
          </div>
          <div>
            The innovative techniques and concepts introduced during the 20th century continue to
            inspire and influence contemporary artists today. Artists draw upon the experimentation,
            abstraction, and conceptual frameworks established in the 20th century to push the
            boundaries of artistic expression in diverse mediums.
          </div>
          <div>
            20th century art movements provided a foundation for subsequent generations of artists
            to build upon and challenge traditional artistic norms. Artists have been able to
            explore new artistic territories, experiment with unconventional materials, and engage
            with societal and cultural issues through the lens of 20th century art.
          </div>
          <div>
            The 20th century witnessed a significant shift in the perception of art, expanding its
            definition and challenging traditional aesthetics. The exploration of subjective
            emotions, societal critiques, and unconventional forms of representation have become
            integral parts of contemporary art practices.
          </div>
          <div>
            The Museum of Modern Art (MoMA) in New York City is renowned for its extensive
            collection of 20th century artworks, showcasing various movements and artists. The
            <div className='text-center m-5 ml-0 float-left'>
              <img className='rounded-md m-auto' src={warhol1} alt='img1' />
              <label>Author: Andy Warhol</label>
            </div>
            Centre Pompidou in Paris, Tate Modern in London, and Guggenheim Museum Bilbao are
            notable institutions dedicated to exhibiting and preserving 20th century art.
            Exhibitions such as Documenta, Venice Biennale, and Art Basel provide platforms for
            contemporary artists to showcase their works, often referencing or reflecting upon the
            legacy of 20th century art.
          </div>
          <div>
            Overall, 20th century art has left an indelible mark on the art world, shaping the way
            we create, perceive, and interpret art in the present day. Its influence is seen not
            only in the work of contemporary artists but also in the institutions and platforms that
            continue to celebrate and engage with this significant period of artistic development.
          </div>
        </li>
        <Divider />
        <li>
          <h3 className='text-xl text-app'>Conclusions:</h3>

          <div>
            Throughout this article, we explored the significance of 20th century art and its impact
            on the art world. We discussed the key art movements that emerged during this period,
            such as Cubism, Surrealism, Abstract Expressionism, and Pop Art. We examined the
            evolution of artistic styles, the influence of technological advancements, and
            highlighted famous artists associated with each movement. Furthermore, we examined the
            lasting legacy and impact of 20th century art on contemporary art practices.
          </div>
          <div>
            The 20th century marked a transformative era in the art world, characterized by radical
            experimentation, challenging conventions, and pushing the boundaries of artistic
            expression. The art movements and revolutions that emerged during this time redefined
            our understanding of art, opening up new possibilities for creative exploration. The
            innovative approaches, conceptual breakthroughs, and cultural critiques introduced by
            20th century artists continue to shape the art world to this day.
          </div>

          <div className='text-center mb-5 lg:float-right lg:m-4 lg:mr-0'>
            <img className='rounded-md m-auto' src={block1} alt='img1' />
            <label>Author: Jackson Pollock</label>
          </div>
          <div>
            Despite the passage of time, the work of artists from the 20th century remains highly
            relevant and significant. Their artistic visions, social commentaries, and technical
            innovations continue to resonate with contemporary artists and audiences. The
            exploration of subjective experiences, cultural identity, and political themes that
            characterized 20th century art still holds relevance in our modern society. By studying
            and appreciating the work of these artists, we gain a deeper understanding of the
            artistic legacy they have left behind.
          </div>
          <div>
            In conclusion, 20th century art has left an indelible mark on the art world. The
            movements, styles, and artists of this period have shaped our understanding of art,
            challenged conventional norms, and continue to inspire contemporary artistic practices.
            The work of 20th century artists remains relevant, influential, and continues to
            captivate audiences, reminding us of the enduring power of artistic expression.
          </div>
        </li>
        <Divider />
      </ol>
      <h4 className='text-xl text-center text-app my-4'>Artistic trends</h4>
      <table className='text-xs md:text-base'>
        <tr className='bg-app text-white border-2 text-center border-app'>
          <th>Art Movement</th>
          <th>Description</th>
          <th>Years and Location</th>
          <th>Notable Artists</th>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Modernism</td>
          <td className='border-2 text-center border-app'>
            A cultural movement that embraced innovation and experimentation in various art forms.
          </td>
          <td className='border-2 text-center border-app'>
            Late 19th to mid-20th century, Europe and North America
          </td>
          <td className='border-2 text-center border-app'>
            Pablo Picasso, Wassily Kandinsky, Henri Matisse
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Abstract Art</td>
          <td className='border-2 text-center border-app'>
            An art style that does not attempt to represent an accurate depiction of visual reality.
          </td>
          <td className='border-2 text-center border-app'>
            Early 20th century, Europe and United States
          </td>
          <td className='border-2 text-center border-app'>
            Jackson Pollock, Piet Mondrian, Kazimir Malevich
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Dadaism</td>
          <td className='border-2 text-center border-app'>
            An art movement that rejected traditional aesthetics and embraced irrationality and
            nonsense.
          </td>
          <td className='border-2 text-center border-app'>Early 20th century, Europe</td>
          <td className='border-2 text-center border-app'>
            Marcel Duchamp, Hans Arp, Tristan Tzara
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Cubism</td>
          <td className='border-2 text-center border-app'>
            An art movement that revolutionized visual representation by depicting objects from
            multiple viewpoints.
          </td>
          <td className='border-2 text-center border-app'>Early 20th century, France</td>
          <td className='border-2 text-center border-app'>
            Pablo Picasso, Georges Braque, Juan Gris
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Post-Impressionism</td>
          <td className='border-2 text-center border-app'>
            A movement that evolved from Impressionism and focused on subjective expression and
            symbolic content.
          </td>
          <td className='border-2 text-center border-app'>Late 19th century, France</td>
          <td className='border-2 text-center border-app'>
            Vincent van Gogh, Paul Cézanne, Paul Gauguin
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Symbolism</td>
          <td className='border-2 text-center border-app'>
            An artistic and literary movement characterized by the use of symbols to express
            emotions and ideas.
          </td>
          <td className='border-2 text-center border-app'>
            Late 19th to early 20th century, Europe
          </td>
          <td className='border-2 text-center border-app'>
            Gustav Klimt, Odilon Redon, Edvard Munch
          </td>
        </tr>
        <tr className='border-2 text-center border-app'>
          <td className='border-2 text-center border-app'>Surrealism</td>
          <td className='border-2 text-center border-app'>
            An art movement that explored the realm of dreams and the unconscious mind.
          </td>
          <td className='border-2 text-center border-app'>1920s-1930s, Europe and North America</td>
          <td className='border-2 text-center border-app'>
            Salvador Dalí, René Magritte, Max Ernst
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
