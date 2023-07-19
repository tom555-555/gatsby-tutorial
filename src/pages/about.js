import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

const AboutPage = ({ data }) => {
  return (
    <div>
      <h1>About Page</h1>
      <Layout>
        <h1>About page</h1>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>サイズ</th>
              <th>作成時間</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.nodes.map((node) => (
              <tr>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.ctime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  );
};

export const query = graphql`
{
  allFile {
    nodes {
      relativePath
        size
        name
        extension
        ctime
    }
  }
}
`;

export default AboutPage;