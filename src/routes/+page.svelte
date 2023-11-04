<script lang="ts">
  type Skill = {
    name: string,
    categories: string,
    exp: number,
    lastUsed: string,
    score: number
  };

  const experience = [
    {
      name: 'Main Languages',
      description: 'These are the languages I use on a daily basis.',
      list: [
        { name: 'C#', categories: 'language', exp: 15, lastUsed: '8/31/2023', score: 5 },
        { name: 'Javascript / Typescript', categories: 'language', exp: 13, lastUsed: '8/31/2023', score: 5 },
        { name: 'CSS', categories: 'language', exp: 4, lastUsed: '8/31/2023', score: 4 },
        { name: 'Sass', categories: 'language', exp: 4, lastUsed: '8/4/2023', score: 4 },
      ]
    },
    {
      name: 'Frameworks and Libraries',
      description: 'These are the frameworks I use on a daily basis.',
      list: [
        { name: '.NET Framework/Core', categories: 'framework', exp: 5, lastUsed: '8/31/2023', score: 5 },
        { name: 'ASP.NET MVC', categories: 'framework', exp: 5, lastUsed: '8/31/2023', score: 5 },
        { name: 'Svelte', categories: 'framework', exp: 5, lastUsed: '9/3/2023', score: 4 },
        { name: 'Vue 2', categories: 'framework', exp: 4, lastUsed: '8/31/2023', score: 3 }, // ?
        { name: 'React', categories: 'framework', exp: 4, lastUsed: '9/13/2022', score: 3 }, // ?
        { name: 'Svelte Kit', categories: 'framework', exp: 0.5, lastUsed: '9/3/2023', score: 1 },
        { name: 'Next', categories: 'framework', exp: 0.2, lastUsed: '1/1/2023', score: 1 },
      ]
    }
  ]

  function skillScore(skill: Skill) {
    // TODO: calculate based on skill details...
    const now = new Date();
    const lastUsed = new Date(skill.lastUsed);
    const dateScore = Math.floor((now.getTime() - lastUsed.getTime()) / 1000 / 60 / 60 / 24 / 365);

    const score = Math.max(Math.min(skill.exp - dateScore, 5), 1);

    // return skill.score;
    return score;
  }

  function skillTooltip(skill: Skill) {
    // TODO: create tooltip based on skill details...
  }

  function skillStyle(skill: Skill) {
    const score = skillScore(skill);

    if (score >= 4) {
      return 'progress-success';
    } else if (score >= 2) {
      return 'progress-warning';
    }
    
    return 'progress-error';
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="container">
    <div class="hero-content flex-col lg:flex-row">
      <img src="mike-webb-preview-bw.png" class="max-w-sm mask mask-squircle shadow-2xl" alt="Michael Webb" />
      <div>
        <h1 class="text-5xl font-bold">Hi, my name is Michael Webb</h1>
        <p class="py-6">
          I am a passionate software developer with a love for crafting innovative solutions to complex problems.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>

<div class="container flex justify-center py-4">
  <div class="stats max-md:stats-vertical shadow-md">
    <div class="stat">
      <div class="stat-figure text-primary">
        <img
          class="w-16 h-16"
          src="https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.svg"
          alt="dotnet logo" />
      </div>
      <div class="stat-title">ASP.NET and C#</div>
      <div class="stat-value text-primary">15 Years</div>
      <div class="stat-desc">Actively developing with this</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <img
          class="w-16 h-16"
          src="https://raw.githubusercontent.com/colorjs/javascript-yellow/master/logo.svg"
          alt="JavaScript logo" />
      </div>
      <div class="stat-title">JavaScript (and Typescript)</div>
      <div class="stat-value text-secondary">6 Years</div>
      <div class="stat-desc">Using this daily</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <img
          class="w-16 h-16"
          src="https://sass-lang.com/assets/img/logos/logo.svg"
          alt="Sass logo" />
      </div>
      <div class="stat-title">Sass</div>
      <div class="stat-value text-info">6 Years</div>
      <div class="stat-desc">Proficient with this</div>
    </div>
  </div>
</div>

<div class="container mx-auto flex flex-col py-4">
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">My Journey</h2>
      <p>
        My journey into the world of software development began in high school on a TI83+ calculator. Over the
        years, I've had the privilege of working on diverse projects that have deepened my understanding of the
        ever-evolving tech landscape. From building web applications and sites that increase revenue to developing
        robust algorithms that crunch data efficiently, I've honed my skills to deliver value through code.
      </p>
    </div>
  </div>

  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Why Work With Me:</h2>
      <ul>
        <li>
          <span class="font-bold">Expertise:</span> My deep knowledge and hands-on experience in software
          development make me a reliable choice for your projects.
        </li>
        <li>
          <span class="font-bold">Problem Solver:</span> I relish challenges and see problems as opportunities
          for growth and innovation.
        </li>
        <li>
          <span class="font-bold">Effective Communication:</span> I understand the importance of clear
          communication and collaboration, ensuring that your project is always on track.
        </li>
        <li>
          <span class="font-bold">Humble Approach:</span> While confident in my abilities, I'm always eager to
          learn from others and grow both personally and professionally.
        </li>
      </ul>
    </div>
  </div>

  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Let's Connect:</h2>
      <p>
        I'm excited to connect with fellow developers, tech enthusiasts, and potential collaborators. If you're
        looking to embark on a tech journey or need a creative problem-solving partner, feel free to reach out.
        Together, we can turn ideas into reality.
      </p>
    </div>
  </div>
</div>

<div class="divider"></div>

<div class="container mx-auto pb-24">
  <h2 class="text-3xl font-bold">Skills</h2>
  <p class="py-6">The following are my top skills and the tools I work with regularly.</p>

    <div class="join join-vertical w-full">
      {#each experience as expType }
        <div class="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked={expType.name === 'Languages'} /> 

          <div class="collapse-title text-xl font-medium">{expType.name}</div>

          <div class="collapse-content px-4">
            <p class="m-2">{expType.description}</p>
            {#each expType.list as skill }
              <label>
                {skill.name}
                <progress class="progress {skillStyle(skill)} w-full" value={skillScore(skill)} max="5"></progress>
              </label>
            {/each}
          </div>
        </div>
      {/each}
    </div>
</div>