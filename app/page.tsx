import Link from 'next/link';

const timeline = [
  {
    title: 'Whole Cake Island - vs. Katakuri',
    content:
      'Luffy pushes his Observation Haki to the limit, awakening a short burst of future sight by mirroring Katakuri\'s calm focus. The boost is situational: once the battle ends, sustaining that state becomes difficult without similar stress and concentration.'
  },
  {
    title: 'Wano - Udon Prison Training',
    content:
      'Hyogoro teaches Luffy to sharpen his Ryou (advanced Armament) while keeping Observation flexible but generalized. Luffy focuses more on striking power than on long-range awareness during this period.'
  },
  {
    title: 'Onigashima Raid - Episode 1012',
    content:
      'The battlefield swarms with powerful Haki signatures layered over Kaido\'s oppressive presence. Luffy prioritizes conserving stamina for the rooftop fight, so he asks Jinbe, whose Fishman sensing excels in underwater corridors, to guide the team.'
  }
];

const hakiFacets = [
  {
    label: 'Spatial Awareness',
    detail:
      'Broad sensing of allies, enemies, and intent within a given radius. Characters like Enel or Fujitora specialize here.'
  },
  {
    label: 'Intent Reading',
    detail:
      'Picking up on killing intent or emotional spikes. Sanji and Coby show this instinctively; it can momentarily vanish when the user is distracted.'
  },
  {
    label: 'Precognition',
    detail:
      'A very short preview of the immediate future. Katakuri maintains it almost constantly; Luffy reaches it in bursts when he is calm, focused, and battle-synced.'
  }
];

export default function Page() {
  return (
    <main>
      <header>
        <h1>Observation Haki in Episode 1012</h1>
        <p>
          Episode 1012 drops Luffy, Sanji, and Jinbe into the dark passageways of Onigashima. Luffy admits his
          Observation Haki is not sharp enough to instantly pinpoint Sanji, and that is absolutely consistent with the
          series' power scaling once context is applied.
        </p>
      </header>

      <section>
        <h2>Why Couldn't Luffy Sense Sanji?</h2>
        <p>
          Luffy is incredible at Observation when he is <strong>locked into a duel</strong> and channeling intense focus.
          That is how he matched Katakuri: by synchronizing his breathing, calm mind, and reflexes to the point of
          glimpsing the future. In Episode 1012 he is sprinting through a labyrinth, low on stamina, under Kaido's
          crushing aura, and surrounded by dozens of Beast Pirates. The sensory noise makes finesse difficult.
        </p>
        <p>
          <strong>Sanji</strong> is also a stealth specialist. His own Observation leans toward sensing distress, but he can
          mask himself when he is calm. Luffy would need to slow down and filter the haze of presences, time he
          does not want to waste when Kaido is waiting overhead. Jinbe, meanwhile, naturally feels vibrations and
          flows of water through Onigashima's interior, so he is the tactical navigator.
        </p>
      </section>

      <section>
        <h2>Observation Is Not a Single Stat</h2>
        <p>
          Observation Haki branches into multiple skills. Characters excel in different mixes depending on training and
          temperament. Luffy's post-Katakuri ability is real, but it shines during <em>1v1 combat</em> where he can lock his
          attention on one opponent.
        </p>
        <ul>
          {hakiFacets.map((facet) => (
            <li key={facet.label}>
              <strong>{facet.label}:</strong> {facet.detail}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Power Progression Snapshot</h2>
        <p>Luffy's Observation peaks in spurts throughout Wano. Here is the relevant slice of his growth curve:</p>
        <ol>
          {timeline.map((entry) => (
            <li key={entry.title}>
              <strong>{entry.title}.</strong> {entry.content}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Luffy can mime Katakuri's future sight, but sustaining it requires calm and energy he is rationing.</li>
          <li>Labyrinth warfare demands wide-area sensing, a facet Luffy has not mastered; Jinbe covers that gap.</li>
          <li>Different Observation flavors exist: awareness, emotional reading, and precognition. Mastering one does not grant the others automatically.</li>
          <li>Episode 1012 shows teamwork pragmatism, not a retcon. Luffy delegates so he can save strength for Yonko-level combat.</li>
        </ul>
      </section>

      <blockquote>
        Luffy was not nerfed; he was being strategic. Observation Haki adapts to the user's mindset, and on the rooftop
        he taps back into future sight once the focus tightens.
      </blockquote>

      <footer>
        Cited from One Piece anime Episode 1012, manga Chapters 1000 to 1006, and related SBS interviews. For deeper
        dives, revisit the{' '}
        <Link href="https://onepiece.fandom.com/wiki/Busoshoku_Haki#Kenbunshoku_Haki" target="_blank">
          Kenbunshoku Haki primer
        </Link>
        .
      </footer>
    </main>
  );
}
