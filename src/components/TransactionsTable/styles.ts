import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      text-align: left;
      font-weight: 400;
      color: var(--text-body);
      line-height: 1.5rem;
     
      padding-left: 2rem;
      
    }

    td {
      padding: 1rem 2rem;
      background-color: var(--shape);
      color: var(--text-body);
      border: none;
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
        font-weight: 500;
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
