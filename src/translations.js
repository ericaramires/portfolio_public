const translations = {
  'pt-BR': {
    nav_home: 'Início',
    nav_skills: 'Habilidades',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',
    greeting: 'Olá, eu sou',
    description: 'Fortalecendo a inovação digital: Unindo a agilidade do DevOps com a robustez da cibersegurança via automação para desenvolver soluções cloud seguras e escaláveis.',
    professions: ['DevOps', 'Técnica Especialista de Cibersegurança'],
    skills_title: 'Tecnologias',
    projects_title: 'Projetos',
    contact_title: 'Contato',
    name_label: 'Nome',
    email_label: 'Email',
    message_label: 'Mensagem',
    send_button: 'Enviar Mensagem',
    cv_text: 'CV',
    cv_file: '/CV-pt-Erica-Ramires.pdf',

    // Project buttons and modal
    view_details: 'Ver Detalhes',
    modal_description: 'Descrição',
    modal_technologies: 'Tecnologias Utilizadas',
    modal_features: 'Funcionalidades',

    // Project 1 - Finance Management
    project1_title: 'Gestão de Finanças',
    project1_description: 'Sistema completo de gestão financeira pessoal desenvolvido em Python. O projeto permite o controle detalhado de receitas, despesas, investimentos e planejamento financeiro com interface intuitiva e relatórios analíticos avançados.',
    project1_features: [
      'Controle de receitas e despesas',
      'Categorização automática de transações',
      'Relatórios visuais com gráficos',
      'Planejamento de orçamento mensal',
      'Análise de tendências financeiras',
      'Backup automático dos dados',
      'Interface gráfica intuitiva'
    ],

    // Project 2 - Homelab Platform
    project2_title: 'Plataforma de Serviços Auto-Hospedados',
    project2_description: 'Infraestrutura completa de homelab utilizando Kubernetes para hospedar múltiplos serviços de forma segura e escalável. Implementação de DevOps com automação completa, monitoramento e alta disponibilidade.',
    project2_features: [
      'Cluster Kubernetes multi-node',
      'Automação com CI/CD',
      'Monitoramento com Prometheus e Grafana',
      'Proxy reverso com CloudFlare',
      'Backup automatizado',
      'Alta disponibilidade e escalabilidade',
      'Segurança com certificados SSL',
      'Gestão centralizada de logs'
    ],

    // Project 3 - Game
    project3_title: 'Overcured Game',
    project3_description: 'Jogo multiplayer online desenvolvido com tecnologias web modernas. Utiliza Phaser 3 para o front-end, Node.js para o backend e Nakama como servidor de jogos. Deploy automatizado na AWS com containerização Docker.',
    project3_features: [
      'Gameplay multiplayer em tempo real',
      'Sistema de matchmaking',
      'Deploy automatizado na AWS',
      'Arquitetura de microserviços',
      'Interface responsiva'
    ],
    project3_link_code: 'Ver Código',

    // Project 4 - REST API
    project4_title: 'REST API Flask',
    project4_description: 'API RESTful robusta e flexível construída com Flask e Python, projetada para gerenciar dados de usuários. Sua principal característica é a capacidade de se conectar dinamicamente a diferentes instâncias do MongoDB com base na configuração do ambiente, tornando-a ideal para desenvolvimento, teste e produção.',
    project4_features: [
      'Gerenciamento completo de usuários (CRUD)',
      'Validação de dados incluindo CPF brasileiro',
      'Configuração multi-ambiente (dev/test/prod)',
      'Conexão dinâmica ao MongoDB',
      'Containerização com Docker',
      'Testes automatizados com Pytest',
      'MongoEngine para modelagem de dados',
      'Deploy flexível com Docker Compose'
    ],
    project4_link_code: 'Ver Código',
  },
  en: {
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    greeting: 'Hello, I am',
    description: 'Strengthening digital innovation by combining DevOps agility with robust cybersecurity via automation, building secure and scalable cloud solutions.',
    professions: ['DevOps', 'Cybersecurity Specialist'],
    skills_title: 'Technologies',
    projects_title: 'Projects',
    contact_title: 'Contact',
    name_label: 'Name',
    email_label: 'Email',
    message_label: 'Message',
    send_button: 'Send Message',
    cv_text: 'Resume',
    cv_file: '/CV-en-Erica-Ramires.pdf',

    // Project buttons and modal
    view_details: 'View Details',
    modal_description: 'Description',
    modal_technologies: 'Technologies Used',
    modal_features: 'Features',

    // Project 1 - Finance Management
    project1_title: 'Finance Management',
    project1_description: 'Complete personal financial management system developed in Python. The project allows detailed control of income, expenses, investments and financial planning with an intuitive interface and advanced analytical reports.',
    project1_features: [
      'Income and expense control',
      'Automatic transaction categorization',
      'Visual reports with charts',
      'Monthly budget planning',
      'Financial trend analysis',
      'Automatic data backup',
      'Intuitive graphical interface'
    ],

    // Project 2 - Homelab Platform
    project2_title: 'Self-Hosted Services Platform',
    project2_description: 'Complete homelab infrastructure using Kubernetes to host multiple services securely and scalably. DevOps implementation with complete automation, monitoring and high availability.',
    project2_features: [
      'Multi-node Kubernetes cluster',
      'CI/CD automation',
      'Monitoring with Prometheus and Grafana',
      'Reverse proxy with CloudFlare',
      'Automated backup',
      'High availability and scalability',
      'SSL certificate security',
      'Centralized log management'
    ],

    // Project 3 - Game
    project3_title: 'Overcured Game',
    project3_description: 'Online multiplayer game developed with modern web technologies. Uses Phaser 3 for the front-end, Node.js for the backend and Nakama as game server. Automated deployment on AWS with Docker containerization.',
    project3_features: [
      'Real-time multiplayer gameplay',
      'Matchmaking system',
      'Automated AWS deployment',
      'Microservices architecture',
      'Responsive interface'
    ],
    project3_link_code: 'View Code',

    // Project 4 - REST API
    project4_title: 'Flask REST API',
    project4_description: 'Robust and flexible RESTful API built with Flask and Python, designed to manage user data. Its key feature is the ability to dynamically connect to different MongoDB instances based on environment configuration, making it ideal for development, testing, and production.',
    project4_features: [
      'Complete user management (CRUD)',
      'Data validation including Brazilian CPF',
      'Multi-environment configuration (dev/test/prod)',
      'Dynamic MongoDB connection',
      'Docker containerization',
      'Automated testing with Pytest',
      'MongoEngine for data modeling',
      'Flexible deployment with Docker Compose'
    ],
    project4_link_code: 'View Code',
  },
};

export default translations;
