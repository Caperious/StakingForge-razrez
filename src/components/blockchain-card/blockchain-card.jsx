import { ImageComponent } from "./image-component.jsx"
import { TitleDescriptionComponent } from "./title-description.jsx"
import { MobileApproxAPRComponent } from "./mobile-approx-apr.jsx"
import { ArrowIconComponent } from "./arrow-icon.jsx"
import { TableAPRComponent } from "./table-apr.jsx"
import { Category } from "./category.jsx"

export const BlockchainCard = ({ blockchain = {} }) => {
  return (
    <>
      <div
        className={`flex flex-row md:flex-col px-4 py-5 justify-start gap-x-2 ${blockchain.card} md:justify-center lg:h-[260px] md:max-w-[260px] md:items-center gap-y-4`}
      >
        <ImageComponent src={blockchain.image} />
        <TitleDescriptionComponent
          name={blockchain.name}
          description={blockchain.description}
          marketCap={blockchain.marketCap}
          category={blockchain.category}
        />
        <MobileApproxAPRComponent
          percentageColor={blockchain.percentageColor}
          percentageLabel={blockchain.percentageLabel}
        />
        <ArrowIconComponent />
        <TableAPRComponent
          marketCap={blockchain.marketCap}
          percentageColor={blockchain.percentageColor}
          percentageLabel={blockchain.percentageLabel}
        />
        <div className={'hidden md:block'}>
          <Category category={blockchain.category}/>
        </div>
      </div>
    </>
  );
};