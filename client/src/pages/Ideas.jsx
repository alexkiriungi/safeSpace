import CallToAction from '../components/CallToAction';

export default function Ideas() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center
    items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Ideas</h1>
      <p className='text-lg text-gray-500'>
        A share a day keeps the vices at bay...
      </p>
      <CallToAction />
    </div>
  );
}
