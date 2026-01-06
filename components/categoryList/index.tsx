import { Categories } from '@/components/categoryList/Categories';
import { Header } from '@/components/ui/header';

export const CategoryListComponent = () => {
  return (
    <div>
      <Header title='カテゴリ一覧' />
      <Categories />
    </div>
  );
};
