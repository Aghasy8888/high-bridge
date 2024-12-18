import {
  ExpenseStatistics,
  MostSellingProducts,
  RecentOrders,
  SectionWrapper,
  WeeklyActivity,
} from './';

const MainPage = () => {
  return (
    <div className="pl-12 pr-10 pt-7">
      <div className="flex gap-[30px] w-full">
        <SectionWrapper
          content={<MostSellingProducts />}
          title="Most selling products"
          wrapperClass={'w-[67%]'}
        />

        <SectionWrapper
          content={<RecentOrders />}
          title="Recent Orders"
          wrapperClass={'w-[33%]'}
        />
      </div>
      <div className="flex gap-[30px] mt-6 w-full">
        <SectionWrapper
          content={<WeeklyActivity />}
          title="Weekly Activity"
          wrapperClass={'w-[67%]'}
        />
        <SectionWrapper
          content={<ExpenseStatistics />}
          title="Expense Statistics"
          wrapperClass={'w-[33%]'}
        />
      </div>
    </div>
  );
};

export default MainPage;
