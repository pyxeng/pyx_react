// dataService.ts
import companyData from 'src/data/company.json';

// Placeholder for CMS data fetching
const fetchFromCMS = async (endpoint: string) => {
  // Simulate fetching data from a CMS
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint === '/company') {
        resolve(companyData);
      } else if (endpoint === '/projects') {
        // Placeholder for fetching projects from CMS
        resolve([
          {
            "id": 1,
            "title": "Project 1 from CMS",
            "description": "Description of project 1 from CMS",
            "image": "https://placekitten.com/200/300",
            "link": "#",
            "date": "2024-07-21",
            "time": "10:00"
          },
          {
            "id": 2,
            "title": "Project 2 from CMS",
            "description": "Description of project 2 from CMS",
            "image": "https://placekitten.com/200/301",
            "link": "#",
            "date": "2024-07-21",
            "time": "11:00"
          }
        ]);
      } else if (endpoint === '/faq') {
        resolve([
          {
            "id": 1,
            "question": "What is this?",
            "answer": "This is a placeholder for FAQ."
          },
          {
            "id": 2,
            "question": "How does it work?",
            "answer": "It works by fetching data from a CMS."
          }
        ]);
      } else if (endpoint === '/blog') {
        resolve([
          {
            "id": 1,
            "title": "Blog Post 1",
            "content": "This is the content of blog post 1."
          },
          {
            "id": 2,
            "title": "Blog Post 2",
            "content": "This is the content of blog post 2."
          }
        ]);
      } else if (endpoint === '/client-area') {
        resolve({
          "message": "Welcome to the client area!"
        });
      } else {
        reject(new Error(`Endpoint not found: ${endpoint}`));
      }
    }, 500);
  });
};

export const fetchCompanyData = async () => {
  return fetchFromCMS('/company');
};

export const fetchProjects = async () => {
  return fetchFromCMS('/projects');
};

export const fetchFaq = async () => {
  return fetchFromCMS('/faq');
};

export const fetchBlog = async () => {
  return fetchFromCMS('/blog');
};

export const fetchClientArea = async () => {
  return fetchFromCMS('/client-area');
};
