import '../css/projects.css'; // Assume you're styling it separately
import manasluImg from '../assets/manaslu.jpg';
import llvmImg from '../assets/llvm.jpg';
import kernelImg from '../assets/simple-toy.png';
import caeImg from '../assets/cvae.png';
import libraryImg from '../assets/library_copy.webp';
import limitlyImg from '../assets/limitly.jpg';
import workfloImg from '../assets/workflo.png';
const projects = [
  {
    title: "Manaslu Labs - Image Attribution and Anti-Deepfake Stack",
    linkText: "repo",
    linkUrl: "https://github.com/Manaslu-Labs",
    description:
      "Built a Rust CLI/API that invisibly watermarks images and embeds a C2PA 'no-ML' license. Enables sub-100 ms detection of AI-generated or altered assets. Upcoming: Photoshop plugin and Meta CAI integration.",
    image: manasluImg,
  },
  {
    title: "LLVM/MLIR Contributor - RISC-V Backend",
    linkText: "code",
    linkUrl: "https://github.com/arvchahal/llvm-project",
    description:
      "Implementing masked-store support for RISC-V Vectors in MLIR (op, rewrite, IR hook, ~1k LOC). Contributing patch to enable TVM/IREE tail support and improve ML kernel throughput by ~20%.",
    image: llvmImg,
  },
{
  title: "Kernel Combinations for Sparse Gaussian Processes",
  linkText: "code",
  linkUrl: "https://github.com/arvchahal/sparse-GP-kernel-combinations-web-forecasting",
  paperUrl: "../public/aml.pdf",
  description:
    "An exploration of kernel combinations in a Sparse Gaussian Process framework to forecast web traffic data, optimizing scalability using inducing points and ELBO maximization.",
  image: kernelImg,
},
  {
    title: "Contrastive Autoencoders vs Variational Autoencoders",
    linkText: "code",
    linkUrl: "https://github.com/allx2100/contrastive-encoders",
    description:
      "Built and evaluated CAEs and VAEs for feature compression on high-dimensional data. Focused on reconstruction quality, latent structure, and ML task efficiency.",
    image: caeImg,
  },
{
  title: "Library of Alexandria",
  linkText: "frontend",
  linkUrl: "https://frontend-indol-six-87.vercel.app/",
  codeRepo: "https://github.com/arvchahal/LibraryofAlexandria",
  description:
    "A digital library platform for cataloging, archiving, and recommending books via semantic embeddings and a modern UI. Built for accessibility and expansion.",
  image: libraryImg,
},
{
  title: "Limitly - Rate-Limiting Proxy for Energy Efficiency",
  linkText: "code",
  linkUrl: "https://www.github.com/arvchahal/limitly",
  paperUrl: "../public/limitly.pdf",
  description:
    "Lightweight reverse proxy implementing leaky bucket & sliding window algorithms. Simulates traffic under load and switches limiters dynamically for energy-optimized throughput.",
  image: limitlyImg,
},
  {
    title: "Workflo - GitHub CI/CD Generator CLI",
    linkText: "code",
    linkUrl: "https://www.github.com/arvchahal/workflo",
    description:
      "Reactive terminal UI built with Go + Bubble Tea to automate GitHub Actions workflow generation. Supports YAML generation, GitHub API calls, and interactive pipeline control.",
    image: workfloImg,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <img src={proj.image} alt={proj.title} className="project-image" />
          <div className="project-text">
<h3>
  {proj.title}{' '}
  {proj.linkUrl && (
    <a
      href={proj.linkUrl}
      className="project-link"
      target="_blank"
      rel="noreferrer"
    >
      [{proj.linkText}]
    </a>
  )}
  {proj.paperUrl && (
    <a
      href={proj.paperUrl}
      className="project-link"
      target="_blank"
      rel="noreferrer"
      style={{ marginLeft: '10px' }}
    >
      [PDF]
    </a>
  )}
  {proj.codeRepo && (
  <a
    href={proj.codeRepo}
    className="project-link"
    target="_blank"
    rel="noreferrer"
    style={{ marginLeft: '10px' }}
  >
    [Code]
  </a>
)}
</h3>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
