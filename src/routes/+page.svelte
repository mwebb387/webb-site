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
      name: 'Languages',
      list: [
        { name: 'C#', categories: 'language', exp: 15, lastUsed: '8-4-2023', score: 5 },
        { name: 'Javascript', categories: 'language', exp: 13, lastUsed: '8-4-2023', score: 5 },
        { name: 'CSS', categories: 'language', exp: 4, lastUsed: '8-4-2023', score: 4 },
        { name: 'Sass', categories: 'language', exp: 4, lastUsed: '8-4-2023', score: 4 },
      ]
    },
    {
      name: 'Frameworks and Libraries',
      list: [
        { name: '.NET Framework/Core', categories: 'framework', exp: 5, lastUsed: '8-4-2023', score: 5 },
        { name: 'ASP.NET MVC', categories: 'framework', exp: 5, lastUsed: '8-4-2023', score: 5 },
        { name: 'Svelte', categories: 'framework', exp: 5, lastUsed: '8-6-2023', score: 4 },
        { name: 'React', categories: 'framework', exp: 4, lastUsed: '9-13-2022', score: 3 }, // ?

        { name: 'Svelte Kit', categories: 'framework', exp: 0.5, lastUsed: '8-6-2023', score: 1 },
        { name: 'Next', categories: 'framework', exp: 0.2, lastUsed: '1-1-2023', score: 1 },
      ]
    }
  ]

  function skillScore(skill: Skill) {
    // TODO: calculate based on skill details...
    return skill.score;
  }

  function skillTooltip(skill: Skill) {
    // TODO: create tooltip based on skill details...
  }

  function skillStyle(score: number) {
    if (score >= 4) {
      return 'progress-success';
    } else if (score >= 2) {
      return 'progress-warning';
    }
    
    return 'progress-error';
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="mike-webb-preview-bw.png" class="max-w-sm mask mask-squircle shadow-2xl" alt="Michael Webb" />
    <div>
      <h1 class="text-5xl font-bold">Hi, my name is Michael Webb</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div class="divider"></div>

<div class="container mx-auto">
  <p>
    Hi, my name is Michael Webb and I love software development. I have over fifteen years of experience in the industry...
  </p>
</div>

<div class="divider"></div>

<div class="container mx-auto pb-24">
  <h2 class="text-3xl font-bold">Skills</h2>
  <p class="py-6">The following are my top skills and the tools I work with regularly.</p>

  {#each experience as expType }
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked={expType.name === 'Languages'} /> 

        <div class="collapse-title text-xl font-medium">{expType.name}</div>

        <div class="collapse-content px-4">
          {#each expType.list as skill }
            <label>
              {skill.name}
              <progress class="progress {skillStyle(skill.score)} w-full" value={skill.score} max="5"></progress>
            </label>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>