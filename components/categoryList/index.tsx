import { Categories } from '@/components/categoryList/categories';
import { Header } from '@/components/ui/header';

export const CategoryListComponent = () => {
  return (
    <div>
      <Header title='カテゴリ一覧' />
      <Categories />
    </div>
  );
};
