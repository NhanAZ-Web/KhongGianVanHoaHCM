interface Tab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function FilterTabs({
  tabs,
  activeTab,
  onTabChange,
}: FilterTabsProps) {
  return (
    <div
      className="
        flex gap-2
        overflow-x-auto
        snap-x snap-mandatory
        scrollbar-none
        pb-1
        -mx-1 px-1
      "
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={`
              snap-start
              flex-shrink-0
              px-5 py-2
              rounded-full
              text-sm font-medium
              transition-all duration-200
              whitespace-nowrap
              cursor-pointer
              ${
                isActive
                  ? 'bg-lotus-pink text-white shadow-sm'
                  : 'bg-transparent text-ink hover:bg-lotus-pale'
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
