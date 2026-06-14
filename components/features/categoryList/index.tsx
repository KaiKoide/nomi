import { Categories } from '@/components/features/categoryList/categories';
import { Header } from '@/components/ui/header';

export const CategoryListComponent = () => {
  return (
    <>
      <Header title='カテゴリ一覧' />
      <Categories />
    </>
  );
};
