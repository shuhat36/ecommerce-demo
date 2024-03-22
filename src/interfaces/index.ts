export interface IProduct {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    image?: string;
    rating?: {
      rate: number;
      count: number;
    };
  }

  export interface IDropDownProps {
    Title: string;
    Options: string[];
    onSelectChange: (selectedOption: string) => void;
  }

  export interface ICategoryProps {
    Title: string;
    Categories: string[];
    onCategoryChange: (selectedCategories: string[]) => void;
  }

  export interface IFooterCol {
    Title: string;
    Items: string[];
  }
  
  export interface IPaginationProps {
    pageCount: number;
    onPageChange: ({ selected }: { selected: number }) => void;
    currentPage: number;
  }

  export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

  export interface ProductListProps {
    productsData: IProduct[];
  }