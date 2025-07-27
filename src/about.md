<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://www.github.com/cranci1.png',
        name: 'Cranci',
        title: 'Owner',
        links: [
            { icon: 'github', link: 'https://github.com/cranci1' },
            { icon: 'discord', link: 'https://discordapp.com/users/908762694096654397' }
        ]
    },
    {
        avatar: 'https://www.github.com/seeike.png',
        name: 'Seeike',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/Seeike' },
            { icon: 'discord', link: 'https://discordapp.com/users/647758496280084480' }
        ]
    },
    {
        avatar: 'https://www.github.com/50n50.png',
        name: '50n50',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/50n50' },
            { icon: 'discord', link: 'https://discordapp.com/users/1072985316916469870' }
        ]
    },
    // https://github.com/xibrox
    {
        avatar: 'https://www.github.com/xibrox.png',
        name: 'Ibro',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/xibrox' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/realdoomsboygaming
    {
        avatar: 'https://www.github.com/realdoomsboygaming.png',
        name: 'Doomsboy',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/realdoomsboygaming' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/hamzenis
    {
        avatar: 'https://www.github.com/hamzenis.png',
        name: 'Hamzenis Kryeziu',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/hamzenis' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/bshar1865
    {
        avatar: 'https://www.github.com/bshar1865.png',
        name: 'Bshar Esfky ',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/bshar1865' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/stormfjeld
    {
        avatar: 'https://www.github.com/stormfjeld.png',
        name: 'Storm',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/stormfjeld' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/undeaDD
    {
        avatar: 'https://www.github.com/undeaDD.png',
        name: 'UndeaDD',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/undeaDD' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/IBH-RAD
    {
        avatar: 'https://www.github.com/IBH-RAD.png',
        name: 'IBH-RAD',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/IBH-RAD' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/ordzy
    {
        avatar: 'https://www.github.com/ordzy.png',
        name: 'Ordzy',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/ordzy' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/ShadeOfChaos
    {
        avatar: 'https://www.github.com/ShadeOfChaos.png',
        name: 'ShadeOfChaos',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/ShadeOfChaos' },
            // { icon: 'discord', link: 'https://discordapp.com/users/1008858706266467328' }
        ]
    },
    // https://github.com/cufiy
    {
        avatar: 'https://www.github.com/cufiy.png',
        name: 'Cufiy',
        title: 'Web Developer',
        links: [
      { icon: 'github', link: 'https://github.com/jmcrafter26' },
      { icon: 'discord', link: 'https://discordapp.com/users/606801871189049344' }
    ]
  }
]
</script>

# Our Team

Say hello to our awesome team.

That's not all. I just didn't have time to add all the members yet.

<VPTeamMembers size="small" :members />