
import { pages } from '@/constants';
import { v4 as uuidv4 } from 'uuid';

function MenuSub({ page }) {
  if (!page.subPages) return null;

  return (
    <>
      {page.subPages.map((subPage) => {
        const path = `/${page.path}/${subPage.path}`;
        return (          
            <li key={uuidv4()}>
              <a href={path}>{subPage.name}</a>
            </li>
        );
      })}
    </>
  );
}

function UnorderedList() {
  return (
    <> 
      <ul> 
        {pages.map((page) => {
          const path = `/${page.path}`;
          return (
            <div key={uuidv4()}>
              <li>
                <a href={path}>{page.name}</a>
                <ul>
                  <MenuSub page={page} />
                </ul>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default function MenuNotPhone(){
    return (
        <nav id='menu_not-phone'>
          <a href='#' className='modalClose' hidden></a>
          <div>
            <a href='#' className='modalClose' hidden></a>
            <UnorderedList />
          </div>
        </nav>

    )

}