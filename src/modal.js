import translations from './translations.js';

// Função para obter a tradução atual
function getCurrentLanguage() {
    return document.documentElement.getAttribute('data-lang') || 'pt-BR';
}

function getTranslation(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || translations['pt-BR'][key] || key;
}

// Dados dos projetos para o modal (usando chaves de tradução)
const projectsData = {
    finance: {
        titleKey: 'project1_title',
        image: "/images/preview/gestão_de_financas.png",
        descriptionKey: 'project1_description',
        technologies: ["Python", "Tkinter", "SQLite", "Matplotlib", "Pandas", "NumPy"],
        featuresKey: 'project1_features',
        links: []
    },
    homelab: {
        titleKey: 'project2_title',
        image: "/images/preview/homelab.jpg",
        descriptionKey: 'project2_description',
        technologies: ["Docker", "Kubernetes", "Linux", "CloudFlare", "NodePort", "K9S", "Prometheus", "Grafana", "Nginx"],
        featuresKey: 'project2_features',
        links: []
    },
    game: {
        titleKey: 'project3_title',
        image: "/images/preview/overcured_game.jpeg",
        descriptionKey: 'project3_description',
        technologies: ["JavaScript", "Node.js", "Vite", "Phaser 3", "Nakama", "Docker", "AWS"],
        featuresKey: 'project3_features',
        links: [
            {
                textKey: "project3_link_code",
                url: "https://github.com/evertonramires/multiplayer-game-demo",
                icon: "fab fa-github"
            }
        ]
    },
    api: {
        titleKey: 'project4_title',
        image: "/images/preview/restapi.png",
        descriptionKey: 'project4_description',
        technologies: ["Python", "Flask", "MongoDB", "MongoEngine", "Docker", "Pytest", "Flask-RESTful"],
        featuresKey: 'project4_features',
        links: [
            {
                textKey: "project4_link_code",
                url: "https://github.com/ericaramires/restapi-flask-",
                icon: "fab fa-github"
            }
        ]
    }
};

// Elementos do DOM
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');
const modalFeatures = document.getElementById('modal-features');
const modalLinks = document.getElementById('modal-links');
const modalClose = document.querySelector('.modal-close');

// Função para abrir o modal
function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Preencher conteúdo do modal usando traduções
    modalTitle.textContent = getTranslation(project.titleKey);
    modalImage.src = project.image;
    modalImage.alt = getTranslation(project.titleKey);
    modalDescription.textContent = getTranslation(project.descriptionKey);

    // Limpar e preencher tecnologias
    modalTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        modalTech.appendChild(techTag);
    });

    // Limpar e preencher funcionalidades
    modalFeatures.innerHTML = '';
    const features = getTranslation(project.featuresKey);
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    // Limpar e preencher links
    modalLinks.innerHTML = '';
    project.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'modal-link';
        linkElement.target = '_blank';
        linkElement.innerHTML = `
            <i class="${link.icon}"></i>
            ${getTranslation(link.textKey)}
        `;
        modalLinks.appendChild(linkElement);
    });

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Função para atualizar o conteúdo do modal baseado no idioma
function updateModalLanguage() {
    // Se o modal estiver aberto, feche e reabra para atualizar o conteúdo
    if (modal.classList.contains('active')) {
        const projectId = modal.getAttribute('data-current-project');
        if (projectId) {
            openModal(projectId);
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar listeners aos botões dos projetos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const button = card.querySelector('.project-btn');
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = card.getAttribute('data-project');
                modal.setAttribute('data-current-project', projectId);
                openModal(projectId);
            });
        }
    });

    // Fechar modal ao clicar no X
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Fechar modal ao clicar fora do conteúdo
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Listener para mudanças de idioma
    document.addEventListener('languageChanged', updateModalLanguage);
});

// Exportar funções para uso externo se necessário
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { openModal, closeModal, projectsData, updateModalLanguage };
} 