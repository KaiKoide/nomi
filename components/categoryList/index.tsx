import { Header } from "@/components/ui/header";
import { Categories } from "@/components/categoryList/categories";

export const CategoryListComponent = () => {
  return (
    <div>
      <Header title="カテゴリ一覧" />
      <Categories />
    </div>
  );
};
