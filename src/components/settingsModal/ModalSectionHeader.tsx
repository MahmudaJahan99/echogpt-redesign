interface ModalSectionHeaderProps {
  heading: string;
}

const ModalSectionHeader = ({ heading }: ModalSectionHeaderProps) => {
  return (
    <h3 className="text-xs font-medium uppercase tracking-wide mb-2.5 text-muted-foreground">
      {heading}
    </h3>
  );
};

export default ModalSectionHeader;
