import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  updatedAt: string;
  url: string;
  language: string;
  topics: string[];
}

export async function getGitHubRepo(owner: string, repo: string): Promise<GitHubRepo> {
  try {
    const { data } = await octokit.repos.get({
      owner,
      repo,
    });

    return {
      name: data.name,
      description: data.description || '',
      stars: data.stargazers_count,
      updatedAt: data.updated_at,
      url: data.html_url,
      language: data.language || '',
      topics: data.topics || [],
    };
  } catch (error) {
    console.error('Error fetching GitHub repo:', error);
    throw error;
  }
}