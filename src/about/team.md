<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://www.github.com/cranci1.png',
        name: 'Cranci',
        title: 'Owner - Main developer',
        links: [
            { icon: 'github', link: 'https://github.com/cranci1' },
        ]
    },
    {
        avatar: 'https://www.github.com/50n50.png',
        name: '50n50',
        title: 'Developer - Module developer - Translator - Designer',
        links: [
            { icon: 'github', link: 'https://github.com/50n50' },
        ]
    },
    {
        avatar: 'https://github.com/realdoomsboygaming.png',
        name: 'realdoomsboygaming',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/realdoomsboygaming' },
        ]
    },
    {
        avatar: 'https://www.github.com/seeike.png',
        name: 'Seeike',
        title: 'Developer - Translator',
        links: [
            { icon: 'github', link: 'https://github.com/Seeike' },
        ]
    },
    {
        avatar: 'https://www.github.com/xibrox.png',
        name: 'Ibro',
        title: 'Developer - Module developer - Translator',
        links: [
            { icon: 'github', link: 'https://github.com/xibrox' },
        ]
    },
    {
        avatar: 'https://www.github.com/hamzenis.png',
        name: 'Hamzenis Kryeziu',
        title: 'Developer - Module developer',
        links: [
            { icon: 'github', link: 'https://github.com/hamzenis' },
        ]
    },
    {
        avatar: 'https://www.github.com/DawudOsman.png',
        name: 'Dawud Osman',
        title: 'Developer - Module dev',
        links: [
            { icon: 'github', link: 'https://github.com/DawudOsman' },
        ]
    },
    {
        avatar: 'https://www.github.com/undeaDD.png',
        name: 'UndeaDD',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/undeaDD' },
        ]
    },
    {
        avatar: 'https://www.github.com/qooode.png',
        name: 'Qooode',
        title: 'Developer',
        links: [
            { icon: 'github', link: 'https://github.com/qooode' },
        ]
    },
    {
        avatar: 'https://github.com/Ylruhc.png',
        name: 'Churly',
        title: 'Developer - Module dev',
        links: [
            { icon: 'github', link: 'https://github.com/Ylruhc' },
        ]
    },
    {
        avatar: 'https://www.github.com/cufiy.png',
        name: 'Cufiy',
        title: 'Module developer - Web developer - Translator',
        links: [
            { icon: 'github', link: 'https://github.com/jmcrafter26' },
        ]
    },
    {
        avatar: 'https://www.github.com/ShadeOfChaos.png',
        name: 'ShadeOfChaos',
        title: 'Module developer',
        links: [
            { icon: 'github', link: 'https://github.com/ShadeOfChaos' },
        ]
    },
    {
        avatar: 'https://www.github.com/bshar1865.png',
        name: 'Bshar Esfky ',
        title: 'Bot owner - Bot developer - Repo contributor',
        links: [
            { icon: 'github', link: 'https://github.com/bshar1865' },
        ]
    },
    {
        avatar: 'https://github.com/365-py.png',
        name: '365mm',
        title: 'Bot developer',
        links: [
            { icon: 'github', link: 'https://github.com/365-py' },
        ]
    },
    {
        avatar: 'https://www.github.com/IBH-RAD.png',
        name: 'IBH-RAD',
        title: 'Repo contributor - Bug tester',
        links: [
            { icon: 'github', link: 'https://github.com/IBH-RAD' },
        ]
    },
    {
        avatar: 'https://www.github.com/ordzy.png',
        name: 'Ordzy',
        title: 'Repo contributor',
        links: [
            { icon: 'github', link: 'https://github.com/ordzy' },
        ]
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/4accfc2fcfa436165febe4cad18de978_webp.png?raw=true',
        name: 'Ciro',
        title: 'Repo contributor - Translator - Designer',
        links: [
            { icon: 'github', link: 'https://github.com/CiroHoodLove' },
        ]
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/2b3b696895d5b7e708e3e5efaad62411_webp.png?raw=true',
        name: 'Utopia',
        title: 'Translator',
        links: []
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/9131174855bd67fc445206e888505a6a_webp.png?raw=true',
        name: 'simplymox',
        title: 'Translator',
        links: []
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/a6cc97f87d356523820461fd761fc3e1_webp.png?raw=true',
        name: 'storm',
        title: 'Translator',
        links: []
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/262d7c1a61ff49355ddb74c76c7c5c7f_webp.png?raw=true',
        name: 'VastSector0',
        title: 'Translator',
        links: []
    },
    {
        avatar: 'https://github.com/50n50/assets/blob/main/pfps/82e3e7054935345b494e12ac33fd8e4f_webp.png?raw=true',
        name: 'Perju',
        title: 'Translator',
        links: []
    },
];
</script>

## Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members />